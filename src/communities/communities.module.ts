import { Module } from '@nestjs/common';
import { CommunitiesController } from './communities.controller';
import { CommunitiesService } from './communities.service';
import { CommunitySeedService } from './seed/community.seed';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';
import { CommunityMember } from 'src/community_members/entities/community_member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, CommunityMember])],
  controllers: [CommunitiesController],
  providers: [CommunitiesService, CommunitySeedService],
  exports: [CommunitiesService],
})
export class CommunitiesModule {}
