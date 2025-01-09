import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { Post } from '../schemas/post.schema';
import { CreatePostDto } from '../dto/create-post.dto';
import { processMedia, validateMedia } from '../../../config/uploads.config';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(userId: string, createPostDto: CreatePostDto): Promise<Post> {
    try {
      console.log('\n=== INÍCIO DA CRIAÇÃO DO POST ===');
      console.log('UserId:', userId);
      console.log('Dados recebidos:', JSON.stringify(createPostDto, null, 2));

      const postData = { ...createPostDto };

      if (postData.media) {
        console.log('\n=== PROCESSAMENTO DE MÍDIA ===');
        console.log('Tamanho da mídia:', postData.media.length, 'caracteres');
        console.log('Primeiros 100 caracteres da mídia:', postData.media.substring(0, 100));

        const validation = validateMedia(postData.media);
        console.log('Resultado da validação:', validation);

        if (!validation.isValid) {
          console.error('❌ Erro: Formato de mídia inválido');
          throw new BadRequestException('Formato de mídia inválido');
        }

        console.log('✅ Validação de mídia bem-sucedida');
        console.log('Iniciando processamento da mídia...');
        
        try {
          postData.media = await processMedia(postData.media);
          console.log('✅ Mídia processada com sucesso');
        } catch (mediaError) {
          console.error('❌ Erro no processamento da mídia:', mediaError);
          throw mediaError;
        }
        
        postData.mediaType = validation.type;
      }

      if (postData.pollOptions && postData.pollOptions.length >= 2) {
        console.log('\n=== CONFIGURAÇÃO DA ENQUETE ===');
        console.log('Opções recebidas:', postData.pollOptions);
        
        postData.poll = {
          options: postData.pollOptions.map(option => ({
            option: option.option,
            votes: []
          })),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        };
        
        console.log('✅ Enquete configurada:', postData.poll);
      }

      console.log('\n=== SALVANDO POST NO BANCO ===');
      const post = new this.postModel({
        ...postData,
        author: new mongoose.Types.ObjectId(userId),
        createdAt: new Date(),
        likes: [],
        comments: []
      });

      try {
        const savedPost = await post.save();
        console.log('✅ Post salvo com sucesso. ID:', savedPost._id);

        const populatedPost = await this.postModel
          .findById(savedPost._id)
          .populate('author', 'nome sobrenome profileImage')
          .exec();

        console.log('✅ Post populado com dados do autor');
        console.log('=== FIM DA CRIAÇÃO DO POST ===\n');
        
        return populatedPost;
      } catch (dbError) {
        console.error('❌ Erro ao salvar no banco:', dbError);
        throw dbError;
      }

    } catch (error) {
      console.error('\n=== ERRO NA CRIAÇÃO DO POST ===');
      console.error('Tipo do erro:', error.name);
      console.error('Mensagem:', error.message);
      console.error('Stack:', error.stack);
      console.error('========================\n');
      throw error;
    }
  }

  async findAll(userId: string, page = 1, limit = 10) {
    console.log('\n=== BUSCANDO TODOS OS POSTS ===');
    console.log('UserId:', userId);
    console.log('Página:', page);
    console.log('Limite:', limit);

    try {
      const skip = (page - 1) * limit;
      const posts = await this.postModel
        .find({ author: new mongoose.Types.ObjectId(userId) })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('author', 'nome sobrenome profileImage')
        .populate('comments.author', 'nome sobrenome profileImage')
        .exec();

      console.log('✅ Posts encontrados:', posts.length);
      console.log('=== FIM DA BUSCA DE POSTS ===\n');
      return posts;
    } catch (error) {
      console.error('❌ Erro ao buscar posts:', error);
      throw error;
    }
  }

  async findByUser(userId: string) {
    console.log('\n=== BUSCANDO POSTS DO USUÁRIO ===');
    console.log('UserId:', userId);

    try {
      const posts = await this.postModel
        .find({ author: new mongoose.Types.ObjectId(userId) })
        .sort({ createdAt: -1 })
        .populate('author', 'nome sobrenome profileImage')
        .populate('comments.author', 'nome sobrenome profileImage')
        .exec();

      console.log('✅ Posts encontrados:', posts.length);
      console.log('=== FIM DA BUSCA DE POSTS DO USUÁRIO ===\n');
      return posts;
    } catch (error) {
      console.error('❌ Erro ao buscar posts do usuário:', error);
      throw error;
    }
  }

  async addComment(postId: string, userId: string, content: string) {
    console.log('\n=== ADICIONANDO COMENTÁRIO ===');
    console.log('PostId:', postId);
    console.log('UserId:', userId);
    console.log('Conteúdo:', content);

    try {
      const post = await this.postModel.findById(postId);
      if (!post) {
        console.error('❌ Post não encontrado');
        throw new NotFoundException('Post não encontrado');
      }

      post.comments.push({
        author: new mongoose.Types.ObjectId(userId),
        content,
        createdAt: new Date()
      });

      const savedPost = await post.save();
      console.log('✅ Comentário adicionado com sucesso');

      const populatedPost = await this.postModel
        .findById(savedPost._id)
        .populate('author', 'nome sobrenome profileImage')
        .populate('comments.author', 'nome sobrenome profileImage')
        .exec();

      console.log('✅ Post populado com dados dos autores');
      console.log('=== FIM DA ADIÇÃO DE COMENTÁRIO ===\n');
      return populatedPost;
    } catch (error) {
      console.error('❌ Erro ao adicionar comentário:', error);
      throw error;
    }
  }

  async toggleLike(postId: string, userId: string) {
    console.log('\n=== ALTERNANDO LIKE ===');
    console.log('PostId:', postId);
    console.log('UserId:', userId);

    try {
      const post = await this.postModel.findById(postId);
      if (!post) {
        console.error('❌ Post não encontrado');
        throw new NotFoundException('Post não encontrado');
      }

      const userObjectId = new mongoose.Types.ObjectId(userId);
      const likeIndex = post.likes.findIndex(id => id.toString() === userObjectId.toString());
      
      if (likeIndex > -1) {
        post.likes.splice(likeIndex, 1);
        console.log('✅ Like removido');
      } else {
        post.likes.push(userObjectId);
        console.log('✅ Like adicionado');
      }

      const savedPost = await post.save();
      const populatedPost = await this.postModel
        .findById(savedPost._id)
        .populate('author', 'nome sobrenome profileImage')
        .populate('comments.author', 'nome sobrenome profileImage')
        .exec();

      console.log('✅ Post atualizado com sucesso');
      console.log('=== FIM DA ALTERAÇÃO DE LIKE ===\n');
      return populatedPost;
    } catch (error) {
      console.error('❌ Erro ao alternar like:', error);
      throw error;
    }
  }

  async addPollVote(postId: string, userId: string, optionIndex: number) {
    console.log('\n=== ADICIONANDO VOTO NA ENQUETE ===');
    console.log('PostId:', postId);
    console.log('UserId:', userId);
    console.log('Índice da opção:', optionIndex);

    try {
      const post = await this.postModel.findById(postId);
      if (!post) {
        console.error('❌ Post não encontrado');
        throw new NotFoundException('Post não encontrado');
      }
      if (!post.poll) {
        console.error('❌ Post não é uma enquete');
        throw new BadRequestException('Este post não é uma enquete');
      }

      const userObjectId = new mongoose.Types.ObjectId(userId);
      
      post.poll.options.forEach((option, index) => {
        const voteIndex = option.votes.findIndex(id => id.toString() === userObjectId.toString());
        if (voteIndex > -1) {
          option.votes.splice(voteIndex, 1);
          console.log(`✅ Voto removido da opção ${index}`);
        }
      });

      post.poll.options[optionIndex].votes.push(userObjectId);
      console.log(`✅ Voto adicionado à opção ${optionIndex}`);

      const savedPost = await post.save();
      const populatedPost = await this.postModel
        .findById(savedPost._id)
        .populate('author', 'nome sobrenome profileImage')
        .populate('comments.author', 'nome sobrenome profileImage')
        .exec();

      console.log('✅ Post atualizado com sucesso');
      console.log('=== FIM DA ADIÇÃO DE VOTO ===\n');
      return populatedPost;
    } catch (error) {
      console.error('❌ Erro ao adicionar voto:', error);
      throw error;
    }
  }
}
