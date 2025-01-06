/* eslint-disable prettier/prettier */
import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdatePrivacyDto } from '../dto/update-privacy.dto';
import { processImage, validateMedia } from '../../../config/uploads.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    if (
      createUserDto.profileImage &&
      !validateMedia(createUserDto.profileImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de perfil inválido');
    }

    if (
      createUserDto.coverImage &&
      !validateMedia(createUserDto.coverImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de capa inválido');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);

    const processedData = {
      ...createUserDto,
      senha: hashedPassword,
      profileImage: createUserDto.profileImage
        ? await processImage(createUserDto.profileImage)
        : null,
      coverImage: createUserDto.coverImage
        ? await processImage(createUserDto.coverImage)
        : null,
      friends: [],
      friendRequests: [],
      sentRequests: [],
      privacySettings: {
        posts: true,
        friends: true,
        media: true,
        about: true
      }
    };

    const newUser = new this.userModel(processedData);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel
      .find()
      .select('-senha')
      .populate('friends', 'nome sobrenome profileImage')
      .exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .select('-senha')
      .populate('friends', 'nome sobrenome profileImage')
      .populate('friendRequests', 'nome sobrenome profileImage')
      .populate('sentRequests', 'nome sobrenome profileImage')
      .exec();

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({ email })
      .populate('friends', 'nome sobrenome profileImage')
      .exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.senha) {
      updateUserDto.senha = await bcrypt.hash(updateUserDto.senha, 10);
    }

    if (
      updateUserDto.profileImage &&
      !validateMedia(updateUserDto.profileImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de perfil inválido');
    }

    if (
      updateUserDto.coverImage &&
      !validateMedia(updateUserDto.coverImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de capa inválido');
    }

    const processedData = {
      ...updateUserDto,
      profileImage: updateUserDto.profileImage
        ? await processImage(updateUserDto.profileImage)
        : undefined,
      coverImage: updateUserDto.coverImage
        ? await processImage(updateUserDto.coverImage)
        : undefined,
    };

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, processedData, { new: true })
      .select('-senha')
      .populate('friends', 'nome sobrenome profileImage')
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return updatedUser;
  }

  async getFriends(userId: string): Promise<User[]> {
    const user = await this.userModel
      .findById(userId)
      .populate('friends', 'nome sobrenome profileImage email')
      .exec();

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user.populated('friends');
  }

  async getFriendRequests(userId: string): Promise<User[]> {
    const user = await this.userModel
      .findById(userId)
      .populate('friendRequests', 'nome sobrenome profileImage email')
      .exec();

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user.populated('friendRequests');
  }

  async getMutualFriends(userId: string, otherUserId: string): Promise<User[]> {
    const user = await this.userModel.findById(userId);
    const otherUser = await this.userModel.findById(otherUserId);

    if (!user || !otherUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const mutualFriendIds = user.friends.filter(friendId => 
      otherUser.friends.some(otherId => otherId.equals(friendId))
    );

    return this.userModel
      .find({ _id: { $in: mutualFriendIds } })
      .select('nome sobrenome profileImage email')
      .exec();
  }

  async getFriendshipStatus(userId: string, otherUserId: string): Promise<string> {
    const user = await this.userModel.findById(userId);
    const otherUser = await this.userModel.findById(otherUserId);

    if (!user || !otherUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const friendId = new Types.ObjectId(otherUserId);

    if (user.friends.some(id => id.equals(friendId))) {
      return 'friends';
    }

    if (user.friendRequests.some(id => id.equals(friendId))) {
      return 'pending_incoming';
    }

    if (user.sentRequests.some(id => id.equals(friendId))) {
      return 'pending_outgoing';
    }

    return 'none';
  }

  async sendFriendRequest(userId: string, friendId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    const friend = await this.userModel.findById(friendId);

    if (!user || !friend) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const friendObjectId = new Types.ObjectId(friendId);

    if (user.friends.some(id => id.equals(friendObjectId))) {
      throw new BadRequestException('Usuários já são amigos');
    }

    if (friend.friendRequests.some(id => id.equals(userObjectId))) {
      throw new BadRequestException('Solicitação já enviada');
    }

    friend.friendRequests.push(userObjectId);
    user.sentRequests.push(friendObjectId);

    await friend.save();
    return user.save();
  }

  async acceptFriendRequest(userId: string, friendId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    const friend = await this.userModel.findById(friendId);

    if (!user || !friend) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const friendObjectId = new Types.ObjectId(friendId);

    user.friendRequests = user.friendRequests.filter(id => !id.equals(friendObjectId));
    friend.sentRequests = friend.sentRequests.filter(id => !id.equals(userObjectId));

    user.friends.push(friendObjectId);
    friend.friends.push(userObjectId);

    await friend.save();
    return user.save();
  }

  async rejectFriendRequest(userId: string, friendId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    const friend = await this.userModel.findById(friendId);

    if (!user || !friend) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const friendObjectId = new Types.ObjectId(friendId);

    user.friendRequests = user.friendRequests.filter(id => !id.equals(friendObjectId));
    friend.sentRequests = friend.sentRequests.filter(id => !id.equals(userObjectId));

    await friend.save();
    return user.save();
  }

  async removeFriend(userId: string, friendId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    const friend = await this.userModel.findById(friendId);

    if (!user || !friend) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const friendObjectId = new Types.ObjectId(friendId);

    user.friends = user.friends.filter(id => !id.equals(friendObjectId));
    friend.friends = friend.friends.filter(id => !id.equals(userObjectId));

    await friend.save();
    return user.save();
  }

  async updatePrivacySettings(userId: string, settings: UpdatePrivacyDto): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    user.privacySettings = {
      ...user.privacySettings,
      ...settings
    };

    return user.save();
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return deletedUser;
  }
}
