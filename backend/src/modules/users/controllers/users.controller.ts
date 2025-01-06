/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdatePrivacyDto } from '../dto/update-privacy.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req) {
    const userId = req.user.userId;
    return this.usersService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/friends')
  getFriends(@Param('id') id: string) {
    return this.usersService.getFriends(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/friend-requests')
  getFriendRequests(@Param('id') id: string) {
    return this.usersService.getFriendRequests(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/mutual-friends/:otherId')
  getMutualFriends(@Param('id') id: string, @Param('otherId') otherId: string) {
    return this.usersService.getMutualFriends(id, otherId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/friendship-status/:otherId')
  getFriendshipStatus(@Param('id') id: string, @Param('otherId') otherId: string) {
    return this.usersService.getFriendshipStatus(id, otherId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/friend-request')
  sendFriendRequest(@Request() req, @Param('id') friendId: string) {
    return this.usersService.sendFriendRequest(req.user.userId, friendId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('friend-request/:id/accept')
  acceptFriendRequest(@Request() req, @Param('id') friendId: string) {
    return this.usersService.acceptFriendRequest(req.user.userId, friendId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('friend-request/:id/reject')
  rejectFriendRequest(@Request() req, @Param('id') friendId: string) {
    return this.usersService.rejectFriendRequest(req.user.userId, friendId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('friends/:id')
  removeFriend(@Request() req, @Param('id') friendId: string) {
    return this.usersService.removeFriend(req.user.userId, friendId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/privacy')
  updatePrivacySettings(@Param('id') id: string, @Body() settings: UpdatePrivacyDto) {
    return this.usersService.updatePrivacySettings(id, settings);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
