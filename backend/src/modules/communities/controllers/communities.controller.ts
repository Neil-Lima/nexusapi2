/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { CommunitiesService } from '../services/communities.service';
import { CreateCommunityDto } from '../dto/create-community.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('communities')
@UseGuards(JwtAuthGuard)
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Post()
  create(@Body() createCommunityDto: CreateCommunityDto, @Request() req) {
    return this.communitiesService.create(createCommunityDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.communitiesService.findAll();
  }

  @Get('my-communities')
  findByUser(@Request() req) {
    return this.communitiesService.findByUser(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.communitiesService.findOne(id);
  }

  @Post(':id/topics')
  addTopic(
    @Param('id') id: string,
    @Request() req,
    @Body() data: { title: string; content: string }
  ) {
    return this.communitiesService.addTopic(
      id,
      req.user.userId,
      data.title,
      data.content
    );
  }

  @Post(':id/topics/:topicIndex/comments')
  addTopicComment(
    @Param('id') id: string,
    @Param('topicIndex') topicIndex: number,
    @Request() req,
    @Body('content') content: string
  ) {
    return this.communitiesService.addTopicComment(
      id,
      Number(topicIndex),
      req.user.userId,
      content
    );
  }

  @Post(':id/topics/:topicIndex/like')
  toggleTopicLike(
    @Param('id') id: string,
    @Param('topicIndex') topicIndex: number,
    @Request() req
  ) {
    return this.communitiesService.toggleTopicLike(
      id,
      Number(topicIndex),
      req.user.userId
    );
  }

  @Post(':id/join')
  join(@Param('id') id: string, @Request() req) {
    return this.communitiesService.join(id, req.user.userId);
  }

  @Post(':id/leave')
  leave(@Param('id') id: string, @Request() req) {
    return this.communitiesService.leave(id, req.user.userId);
  }
}
