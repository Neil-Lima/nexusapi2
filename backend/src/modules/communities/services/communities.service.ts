/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Community, CommunityDocument } from '../schemas/community.schema';
import { CreateCommunityDto } from '../dto/create-community.dto';

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectModel(Community.name) private communityModel: Model<CommunityDocument>
  ) {}

  async create(createCommunityDto: CreateCommunityDto, userId: string): Promise<Community> {
    const userObjectId = new Types.ObjectId(userId);
    
    const community = new this.communityModel({
      ...createCommunityDto,
      owner: userObjectId,
      admins: [userObjectId],
      members: [userObjectId],
      memberDetails: [{
        user: userObjectId,
        role: 'admin',
        joinedAt: new Date()
      }],
      stats: {
        totalMembers: 1,
        activeMembers: 1,
        totalPosts: 0,
        totalTopics: 0
      },
      topics: []
    });

    return community.save();
  }

  async findAll(): Promise<Community[]> {
    return this.communityModel.find()
      .populate('owner', 'nome profileImage')
      .populate('members', 'nome profileImage')
      .exec();
  }

  async findByUser(userId: string): Promise<Community[]> {
    const userObjectId = new Types.ObjectId(userId);
    
    return this.communityModel.find({
      $or: [
        { owner: userObjectId },
        { members: userObjectId }
      ]
    })
    .populate('owner', 'nome profileImage')
    .populate('members', 'nome profileImage')
    .exec();
  }

  async findOne(id: string): Promise<Community> {
    const community = await this.communityModel.findById(id)
      .populate('owner', 'nome profileImage')
      .populate('members', 'nome profileImage')
      .populate('topics.author', 'nome profileImage')
      .populate('topics.comments.author', 'nome profileImage')
      .exec();

    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    return community;
  }

  async addTopic(communityId: string, userId: string, title: string, content: string): Promise<Community> {
    const community = await this.communityModel.findById(communityId);
    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    const userObjectId = new Types.ObjectId(userId);
    
    if (!community.stats) {
        community.stats = {
            totalMembers: community.members.length,
            activeMembers: community.members.length,
            totalPosts: 0,
            totalTopics: 0
        };
    }

    if (!community.topics) {
        community.topics = [];
    }
    
    community.topics.push({
      title,
      content,
      author: userObjectId,
      isPinned: false,
      likes: [],
      comments: [],
      createdAt: new Date()
    } as any);

    community.stats.totalTopics += 1;
    
    return community.save();
  }

  async addTopicComment(
    communityId: string,
    topicIndex: number,
    userId: string,
    content: string
  ): Promise<Community> {
    const community = await this.communityModel.findById(communityId);
    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    const topic = community.topics[topicIndex];
    if (!topic) {
      throw new NotFoundException('Tópico não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    
    topic.comments.push({
      author: userObjectId,
      content,
      createdAt: new Date()
    } as any);

    return community.save();
  }

  async toggleTopicLike(communityId: string, topicIndex: number, userId: string): Promise<Community> {
    const community = await this.communityModel.findById(communityId);
    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    const topic = community.topics[topicIndex];
    if (!topic) {
      throw new NotFoundException('Tópico não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const likeIndex = topic.likes.findIndex(id => id.toString() === userObjectId.toString());

    if (likeIndex > -1) {
      topic.likes.splice(likeIndex, 1);
    } else {
      topic.likes.push(userObjectId);
    }

    return community.save();
  }

  async join(communityId: string, userId: string): Promise<Community> {
    const community = await this.communityModel.findById(communityId);
    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    const userObjectId = new Types.ObjectId(userId);

    if (community.members.some(id => id.toString() === userObjectId.toString())) {
      throw new BadRequestException('Usuário já é membro');
    }

    community.members.push(userObjectId);
    community.memberDetails.push({
      user: userObjectId,
      role: 'member',
      joinedAt: new Date()
    });

    if (!community.stats) {
        community.stats = {
            totalMembers: 1,
            activeMembers: 1,
            totalPosts: 0,
            totalTopics: 0
        };
    }

    community.stats.totalMembers += 1;
    community.stats.activeMembers += 1;

    return community.save();
  }

  async leave(communityId: string, userId: string): Promise<Community> {
    const community = await this.communityModel.findById(communityId);
    if (!community) {
      throw new NotFoundException('Comunidade não encontrada');
    }

    if (community.owner.toString() === userId) {
      throw new BadRequestException('O dono não pode sair da comunidade');
    }

    const userObjectId = new Types.ObjectId(userId);

    community.members = community.members.filter(id => id.toString() !== userObjectId.toString());
    community.memberDetails = community.memberDetails.filter(
      member => member.user.toString() !== userObjectId.toString()
    );

    if (!community.stats) {
        community.stats = {
            totalMembers: community.members.length,
            activeMembers: community.members.length,
            totalPosts: 0,
            totalTopics: 0
        };
    }

    community.stats.totalMembers -= 1;
    community.stats.activeMembers -= 1;

    return community.save();
  }
}
