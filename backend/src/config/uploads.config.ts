import { registerAs } from '@nestjs/config';
import * as sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs-extra';
import { Buffer } from 'buffer';
import { createReadStream } from 'fs';
import { join } from 'path';

export const uploadsConfig = {
  maxFileSize: 200 * 1024 * 1024, // Aumentado para 200MB
  allowedMimeTypes: {
    image: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
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
  console.log('\n=== VALIDAÇÃO DE MÍDIA ===');
  console.log('Iniciando validação da mídia');
  console.log('Tamanho do base64:', base64String.length);
  
  try {
    const matches = base64String.match(
      /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/,
    );
    console.log('Matches encontrados:', matches ? 'Sim' : 'Não');
    
    if (!matches) {
      console.log('❌ Formato base64 inválido');
      return { isValid: false, type: null, mimeType: null };
    }

    const mimeType = matches[1];
    console.log('MIME Type detectado:', mimeType);

    if (uploadsConfig.allowedMimeTypes.image.includes(mimeType)) {
      console.log('✅ Mídia validada como imagem');
      return { isValid: true, type: 'image', mimeType };
    }
    if (uploadsConfig.allowedMimeTypes.video.includes(mimeType)) {
      console.log('✅ Mídia validada como vídeo');
      return { isValid: true, type: 'video', mimeType };
    }
    if (uploadsConfig.allowedMimeTypes.audio.includes(mimeType)) {
      console.log('✅ Mídia validada como áudio');
      return { isValid: true, type: 'audio', mimeType };
    }

    console.log('❌ Tipo de mídia não suportado');
    return { isValid: false, type: null, mimeType };
  } catch (error) {
    console.error('❌ Erro na validação:', error);
    return { isValid: false, type: null, mimeType: null };
  }
};

export const processImage = async (base64String: string): Promise<string> => {
  console.log('\n=== PROCESSAMENTO DE IMAGEM ===');
  try {
    console.log('Removendo cabeçalho base64');
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    
    console.log('Convertendo base64 para buffer');
    const buffer = Buffer.from(base64Data, 'base64');

    console.log('Processando imagem com sharp');
    console.log('Configurações:', {
      maxWidth: uploadsConfig.compression.image.maxWidth,
      maxHeight: uploadsConfig.compression.image.maxHeight,
      quality: uploadsConfig.compression.image.quality
    });

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

    console.log('✅ Imagem processada com sucesso');
    return `data:image/jpeg;base64,${processedBuffer.toString('base64')}`;
  } catch (error) {
    console.error('❌ Erro no processamento da imagem:', error);
    throw new Error('Erro ao processar imagem');
  }
};

export const processVideo = async (base64String: string): Promise<string> => {
  console.log('\n=== PROCESSAMENTO DE VÍDEO ===');
  try {
    console.log('Removendo cabeçalho base64');
    const base64Data = base64String.replace(/^data:video\/\w+;base64,/, '');
    
    console.log('Convertendo base64 para buffer');
    const inputBuffer = Buffer.from(base64Data, 'base64');
    
    const tempFilePath = join(process.cwd(), `temp-${Date.now()}.mp4`);
    console.log('Arquivo temporário:', tempFilePath);
    
    await fs.writeFile(tempFilePath, inputBuffer);

    const outputBuffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      const inputStream = createReadStream(tempFilePath);

      console.log('Iniciando processamento ffmpeg');
      console.log('Configurações:', {
        size: `${uploadsConfig.compression.video.maxWidth}x${uploadsConfig.compression.video.maxHeight}`,
        bitrate: uploadsConfig.compression.video.bitrate,
        codec: uploadsConfig.compression.video.codec
      });

      ffmpeg(inputStream)
        .size(
          `${uploadsConfig.compression.video.maxWidth}x${uploadsConfig.compression.video.maxHeight}`,
        )
        .videoBitrate(uploadsConfig.compression.video.bitrate)
        .videoCodec(uploadsConfig.compression.video.codec)
        .toFormat(uploadsConfig.compression.video.format)
        .on('end', async () => {
          console.log('✅ Processamento ffmpeg concluído');
          await fs.unlink(tempFilePath);
          resolve(Buffer.concat(chunks));
        })
        .on('error', async (err) => {
          console.error('❌ Erro no ffmpeg:', err);
          await fs.unlink(tempFilePath);
          reject(err);
        })
        .pipe()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    });

    console.log('✅ Vídeo processado com sucesso');
    return `data:video/mp4;base64,${outputBuffer.toString('base64')}`;
  } catch (error) {
    console.error('❌ Erro no processamento do vídeo:', error);
    throw new Error('Erro ao processar vídeo');
  }
};

export const processAudio = async (base64String: string): Promise<string> => {
  console.log('\n=== PROCESSAMENTO DE ÁUDIO ===');
  try {
    console.log('Removendo cabeçalho base64');
    const base64Data = base64String.replace(/^data:audio\/\w+;base64,/, '');
    
    console.log('Convertendo base64 para buffer');
    const inputBuffer = Buffer.from(base64Data, 'base64');
    
    const tempFilePath = join(process.cwd(), `temp-${Date.now()}.mp3`);
    console.log('Arquivo temporário:', tempFilePath);
    
    await fs.writeFile(tempFilePath, inputBuffer);

    const outputBuffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      const inputStream = createReadStream(tempFilePath);

      console.log('Iniciando processamento ffmpeg');
      console.log('Configurações:', {
        bitrate: uploadsConfig.compression.audio.bitrate,
        codec: uploadsConfig.compression.audio.codec
      });

      ffmpeg(inputStream)
        .audioBitrate(uploadsConfig.compression.audio.bitrate)
        .audioCodec(uploadsConfig.compression.audio.codec)
        .toFormat(uploadsConfig.compression.audio.format)
        .on('end', async () => {
          console.log('✅ Processamento ffmpeg concluído');
          await fs.unlink(tempFilePath);
          resolve(Buffer.concat(chunks));
        })
        .on('error', async (err) => {
          console.error('❌ Erro no ffmpeg:', err);
          await fs.unlink(tempFilePath);
          reject(err);
        })
        .pipe()
        .on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    });

    console.log('✅ Áudio processado com sucesso');
    return `data:audio/mp3;base64,${outputBuffer.toString('base64')}`;
  } catch (error) {
    console.error('❌ Erro no processamento do áudio:', error);
    throw new Error('Erro ao processar áudio');
  }
};

export const processMedia = async (base64String: string): Promise<string> => {
  console.log('\n=== INÍCIO DO PROCESSAMENTO DE MÍDIA ===');
  console.log('Tamanho do base64:', base64String.length);
  
  const validation = validateMedia(base64String);
  console.log('Resultado da validação:', validation);

  if (!validation.isValid) {
    console.error('❌ Formato de mídia inválido');
    throw new Error('Formato de mídia inválido');
  }

  console.log(`Processando mídia do tipo: ${validation.type}`);
  
  try {
    let result;
    switch (validation.type) {
      case 'image':
        result = await processImage(base64String);
        break;
      case 'video':
        result = await processVideo(base64String);
        break;
      case 'audio':
        result = await processAudio(base64String);
        break;
      default:
        throw new Error('Tipo de mídia não suportado');
    }
    
    console.log('✅ Processamento de mídia concluído com sucesso');
    console.log('=== FIM DO PROCESSAMENTO DE MÍDIA ===\n');
    return result;
  } catch (error) {
    console.error('❌ Erro durante o processamento:', error);
    throw error;
  }
};

export default registerAs('uploads', () => uploadsConfig);
