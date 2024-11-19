import { Module } from '@nestjs/common';
import { CommunityMemberRolesService } from './community_member_roles.service';
import { CommunityMemberRolesController } from './community_member_roles.controller';

@Module({
  controllers: [CommunityMemberRolesController],
  providers: [CommunityMemberRolesService],
})
export class CommunityMemberRolesModule {}
