import { IsString, IsOptional } from 'class-validator';

export class UpdateImagesDto {
  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;
}
