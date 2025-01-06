/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunitiesService } from './services/communities.service';
import { CommunitiesController } from './controllers/communities.controller';
import { Community, CommunitySchema } from './schemas/community.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Community.name, schema: CommunitySchema }
    ])
  ],
  controllers: [CommunitiesController],
  providers: [CommunitiesService],
  exports: [CommunitiesService]
})
export class CommunitiesModule {}
