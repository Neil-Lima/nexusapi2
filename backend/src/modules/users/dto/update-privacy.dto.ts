/* eslint-disable prettier/prettier */
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePrivacyDto {
  @IsOptional()
  @IsBoolean()
  posts?: boolean;

  @IsOptional()
  @IsBoolean()
  friends?: boolean;

  @IsOptional()
  @IsBoolean()
  media?: boolean;

  @IsOptional()
  @IsBoolean()
  about?: boolean;
}
