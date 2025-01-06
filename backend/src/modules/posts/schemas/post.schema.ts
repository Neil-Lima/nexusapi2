/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author: mongoose.Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ type: String, maxlength: 10485760 })
  media: string;

  @Prop({ enum: ['image', 'video', 'audio'], required: false })
  mediaType: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  likes: mongoose.Types.ObjectId[];

  @Prop({
    type: [{
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      content: String,
      createdAt: Date
    }]
  })
  comments: Array<{
    author: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }>;

  @Prop({
    type: {
      options: [{
        option: String,
        votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
      }],
      endDate: Date
    }
  })
  poll: {
    options: Array<{
      option: string;
      votes: mongoose.Types.ObjectId[];
    }>;
    endDate: Date;
  };
}

export const PostSchema = SchemaFactory.createForClass(Post);
