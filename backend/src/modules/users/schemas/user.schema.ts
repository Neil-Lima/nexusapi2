/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  sobrenome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: true })
  pais: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ required: true })
  cidade: string;

  @Prop({ required: true })
  dataNascimento: Date;

  @Prop({ required: true })
  genero: string;

  @Prop({ type: String, maxlength: 10485760 })
  profileImage: string;

  @Prop({ type: String, maxlength: 10485760 })
  coverImage: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: ['user'] })
  roles: string[];

  @Prop()
  lastLogin: Date;

  @Prop()
  passwordResetToken: string;

  @Prop()
  passwordResetExpires: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  friends: mongoose.Types.ObjectId[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  friendRequests: mongoose.Types.ObjectId[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  sentRequests: mongoose.Types.ObjectId[];

  @Prop({
    type: {
      posts: { type: Boolean, default: true },
      friends: { type: Boolean, default: true },
      media: { type: Boolean, default: true },
      about: { type: Boolean, default: true }
    }
  })
  privacySettings: {
    posts: boolean;
    friends: boolean;
    media: boolean;
    about: boolean;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
