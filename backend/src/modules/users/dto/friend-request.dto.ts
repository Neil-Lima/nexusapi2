/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class FriendRequestDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  friendId: string;
}
