import { registerAs } from '@nestjs/config';
import * as sharp from 'sharp';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs-extra';
import { Buffer } from 'buffer';
import { createReadStream } from 'fs';
import { join } from 'path';

export const uploadsConfig = {
  maxFileSize: 50 * 1024 * 1024,
  allowedMimeTypes: {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    video: ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-matroska'],
    audio: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/webm'],
  },
  compression: {
    image: {
      quality: 80,
      maxWidth: 1920,
      maxHeight: 1080,
      format: 'jpeg',
    },
    video: {
      codec: 'libx264',
      bitrate: '1000k',
      maxWidth: 1280,
      maxHeight: 720,
      format: 'mp4',
    },
    audio: {
      codec: 'libmp3lame',
      bitrate: '128k',
      format: 'mp3',
    },
  },
};

export const validateMedia = (
  base64String: string,
): {
  isValid: boolean;
  type: 'image' | 'video' | 'audio' | null;
  mimeType: string | null;
} => {
  try {
    const matches = base64String.match(
      /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/,
    );
    if (!matches) {
      return { isValid: false, type: null, mimeType: null };
    }

    const mimeType = matches[1];

    if (uploadsConfig.allowedMimeTypes.image.includes(mimeType)) {
      return { isValid: true, type: 'image', mimeType };
    }
    if (uploadsConfig.allowedMimeTypes.video.includes(mimeType)) {
      return { isValid: true, type: 'video', mimeType };
    }
    if (uploadsConfig.allowedMimeTypes.audio.includes(mimeType)) {
      return { isValid: true, type: 'audio', mimeType };
    }

    return { isValid: false, type: null, mimeType };
  } catch {
    return { isValid: false, type: null, mimeType: null };
  }
};

export const processImage = async (base64String: string): Promise<string> => {
  try {
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const processedBuffer = await sharp(buffer)
      .resize(
        uploadsConfig.compression.image.maxWidth,
        uploadsConfig.compression.image.maxHeight,
        {
          fit: 'inside',
          withoutEnlargement: true,
        },
      )
      .jpeg({ quality: uploadsConfig.compression.image.quality })
      .toBuffer();

    return `data:image/jpeg;base64,${processedBuffer.toString('base64')}`;
  } catch {
    throw new Error('Erro ao processar imagem');
  }
};

export const processVideo = async (base64String: string): Promise<string> => {
  try {
    const base64Data = base64String.replace(/^data:video\/\w+;base64,/, '');
    const inputBuffer = Buffer.from(base64Data, 'base64');
    const tempFilePath = join(process.cwd(), `temp-${Date.now()}.mp4`);
    await fs.writeFile(tempFilePath, inputBuffer);

    const outputBuffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      const inputStream = createReadStream(tempFilePath);

      ffmpeg(inputStream)
        .size(
          `${uploadsConfig.compression.video.maxWidth}x${uploadsConfig.compression.video.maxHeight}`,
        )
        .videoBitrate(uploadsConfig.compression.video.bitrate)
        .videoCodec(uploadsConfig.compression.video.codec)
        .toFormat(uploadsConfig.compression.video.format)
        .on('end', async () => {
          await fs.unlink(tempFilePath);
          resolve(Buffer.concat(chunks));
        })
        .on('error', async (err) => {
          await fs.unlink(tempFilePath);
          reject(err);
        })
        .pipe()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    });

    return `data:video/mp4;base64,${outputBuffer.toString('base64')}`;
  } catch {
    throw new Error('Erro ao processar vídeo');
  }
};

export const processAudio = async (base64String: string): Promise<string> => {
  try {
    const base64Data = base64String.replace(/^data:audio\/\w+;base64,/, '');
    const inputBuffer = Buffer.from(base64Data, 'base64');
    const tempFilePath = join(process.cwd(), `temp-${Date.now()}.mp3`);
    await fs.writeFile(tempFilePath, inputBuffer);

    const outputBuffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      const inputStream = createReadStream(tempFilePath);

      ffmpeg(inputStream)
        .audioBitrate(uploadsConfig.compression.audio.bitrate)
        .audioCodec(uploadsConfig.compression.audio.codec)
        .toFormat(uploadsConfig.compression.audio.format)
        .on('end', async () => {
          await fs.unlink(tempFilePath);
          resolve(Buffer.concat(chunks));
        })
        .on('error', async (err) => {
          await fs.unlink(tempFilePath);
          reject(err);
        })
        .pipe()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    });

    return `data:audio/mp3;base64,${outputBuffer.toString('base64')}`;
  } catch {
    throw new Error('Erro ao processar áudio');
  }
};

export const processMedia = async (base64String: string): Promise<string> => {
  const validation = validateMedia(base64String);

  if (!validation.isValid) {
    throw new Error('Formato de mídia inválido');
  }

  switch (validation.type) {
    case 'image':
      return processImage(base64String);
    case 'video':
      return processVideo(base64String);
    case 'audio':
      return processAudio(base64String);
    default:
      throw new Error('Tipo de mídia não suportado');
  }
};

export default registerAs('uploads', () => uploadsConfig);
