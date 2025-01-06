/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsEnum, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PollOptionDto {
  @IsString()
  option: string;
}

export class CreatePostDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  media?: string;

  @IsOptional()
  @IsEnum(['image', 'video', 'audio'])
  mediaType?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PollOptionDto)
  pollOptions?: PollOptionDto[];

  @IsOptional()
  poll?: {
    options: Array<{
      option: string;
      votes: string[];
    }>;
    endDate: Date;
  };
}
