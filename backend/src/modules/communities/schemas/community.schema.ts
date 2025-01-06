/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommunityDocument = Community & Document;

@Schema({ timestamps: true })
export class Community {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, enum: ['public', 'private'] })
  privacy: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: String })
  coverImage: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  admins: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  members: Types.ObjectId[];

  @Prop([{
    user: { type: Types.ObjectId, ref: 'User' },
    role: String,
    joinedAt: Date
  }])
  memberDetails: Array<{
    user: Types.ObjectId;
    role: string;
    joinedAt: Date;
  }>;

  @Prop([String])
  rules: string[];

  @Prop([{
    title: String,
    content: String,
    author: { type: Types.ObjectId, ref: 'User' },
    isPinned: Boolean,
    likes: [{ type: Types.ObjectId, ref: 'User' }],
    comments: [{
      author: { type: Types.ObjectId, ref: 'User' },
      content: String,
      createdAt: Date
    }],
    createdAt: Date
  }])
  topics: Array<{
    title: string;
    content: string;
    author: Types.ObjectId;
    isPinned: boolean;
    likes: Types.ObjectId[];
    comments: Array<{
      author: Types.ObjectId;
      content: string;
      createdAt: Date;
    }>;
    createdAt: Date;
  }>;

  @Prop({
    type: {
      totalMembers: { type: Number, default: 0 },
      activeMembers: { type: Number, default: 0 },
      totalPosts: { type: Number, default: 0 },
      totalTopics: { type: Number, default: 0 }
    },
    _id: false,
    default: {
      totalMembers: 0,
      activeMembers: 0,
      totalPosts: 0,
      totalTopics: 0
    }
  })
  stats: {
    totalMembers: number;
    activeMembers: number;
    totalPosts: number;
    totalTopics: number;
  };
}

export const CommunitySchema = SchemaFactory.createForClass(Community);
