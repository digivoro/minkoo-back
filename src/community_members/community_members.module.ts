import { Module } from '@nestjs/common';
import { CommunityMembersService } from './community_members.service';
import { CommunityMembersController } from './community_members.controller';

@Module({
  controllers: [CommunityMembersController],
  providers: [CommunityMembersService],
})
export class CommunityMembersModule {}
