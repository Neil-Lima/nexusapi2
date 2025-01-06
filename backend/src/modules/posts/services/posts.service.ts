/* eslint-disable prettier/prettier */
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
      const postData = { ...createPostDto };

      if (postData.media) {
        const validation = validateMedia(postData.media);
        if (!validation.isValid) {
          throw new BadRequestException('Formato de mídia inválido');
        }
        postData.media = await processMedia(postData.media);
        postData.mediaType = validation.type;
      }

      if (postData.pollOptions && postData.pollOptions.length >= 2) {
        postData.poll = {
          options: postData.pollOptions.map(option => ({
            option: option.option,
            votes: []
          })),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        };
      }

      const post = new this.postModel({
        ...postData,
        author: new mongoose.Types.ObjectId(userId),
        createdAt: new Date(),
        likes: [],
        comments: []
      });

      const savedPost = await post.save();
      return await this.postModel
        .findById(savedPost._id)
        .populate('author', 'nome sobrenome profileImage')
        .exec();
    } catch (error) {
      console.error('Post creation error:', error);
      throw error;
    }
  }

  async findAll(userId: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    return this.postModel
      .find({ author: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author', 'nome sobrenome profileImage')
      .populate('comments.author', 'nome sobrenome profileImage')
      .exec();
  }

  async findByUser(userId: string) {
    return this.postModel
      .find({ author: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .populate('author', 'nome sobrenome profileImage')
      .populate('comments.author', 'nome sobrenome profileImage')
      .exec();
  }

  async addComment(postId: string, userId: string, content: string) {
    const post = await this.postModel.findById(postId);
    if (!post) throw new NotFoundException('Post não encontrado');

    post.comments.push({
      author: new mongoose.Types.ObjectId(userId),
      content,
      createdAt: new Date()
    });

    const savedPost = await post.save();
    return this.postModel
      .findById(savedPost._id)
      .populate('author', 'nome sobrenome profileImage')
      .populate('comments.author', 'nome sobrenome profileImage')
      .exec();
  }

  async toggleLike(postId: string, userId: string) {
    const post = await this.postModel.findById(postId);
    if (!post) throw new NotFoundException('Post não encontrado');

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const likeIndex = post.likes.findIndex(id => id.toString() === userObjectId.toString());
    
    if (likeIndex > -1) {
      post.likes.splice(likeIndex, 1);
    } else {
      post.likes.push(userObjectId);
    }

    const savedPost = await post.save();
    return this.postModel
      .findById(savedPost._id)
      .populate('author', 'nome sobrenome profileImage')
      .populate('comments.author', 'nome sobrenome profileImage')
      .exec();
  }

  async addPollVote(postId: string, userId: string, optionIndex: number) {
    const post = await this.postModel.findById(postId);
    if (!post) throw new NotFoundException('Post não encontrado');
    if (!post.poll) throw new BadRequestException('Este post não é uma enquete');

    const userObjectId = new mongoose.Types.ObjectId(userId);
    
    post.poll.options.forEach((option) => {
      const voteIndex = option.votes.findIndex(id => id.toString() === userObjectId.toString());
      if (voteIndex > -1) {
        option.votes.splice(voteIndex, 1);
      }
    });

    post.poll.options[optionIndex].votes.push(userObjectId);

    const savedPost = await post.save();
    return this.postModel
      .findById(savedPost._id)
      .populate('author', 'nome sobrenome profileImage')
      .populate('comments.author', 'nome sobrenome profileImage')
      .exec();
  }
}
