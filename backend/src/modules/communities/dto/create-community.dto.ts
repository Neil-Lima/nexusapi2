/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEnum, IsOptional, IsArray } from 'class-validator';

export class CreateCommunityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsEnum(['public', 'private'])
  privacy: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  rules?: string[];

  stats?: {
    totalMembers: number;
    activeMembers: number;
    totalPosts: number;
    totalTopics: number;
  };
}
