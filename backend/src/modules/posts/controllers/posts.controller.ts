/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Request() req, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(req.user.userId, createPostDto);
  }

  @Get()
  findAll(
    @Request() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.postsService.findAll(req.user.userId, page, limit);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.postsService.findByUser(userId);
  }

  @Post(':id/comment')
  addComment(
    @Param('id') postId: string,
    @Request() req,
    @Body('content') content: string,
  ) {
    return this.postsService.addComment(postId, req.user.userId, content);
  }

  @Post(':id/like')
  toggleLike(@Param('id') postId: string, @Request() req) {
    return this.postsService.toggleLike(postId, req.user.userId);
  }

  @Post(':id/vote/:optionIndex')
  addPollVote(
    @Param('id') postId: string,
    @Param('optionIndex') optionIndex: number,
    @Request() req,
  ) {
    return this.postsService.addPollVote(postId, req.user.userId, optionIndex);
  }
}
