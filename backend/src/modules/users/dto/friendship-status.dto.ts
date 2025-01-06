/* eslint-disable prettier/prettier */
import { IsString, IsEnum } from 'class-validator';

export class FriendshipStatusDto {
  @IsString()
  @IsEnum(['none', 'pending_incoming', 'pending_outgoing', 'friends'])
  status: string;
}
