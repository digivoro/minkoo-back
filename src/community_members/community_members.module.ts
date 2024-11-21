import { Module } from '@nestjs/common';
import { CommunityMembersService } from './community_members.service';
import { CommunityMembersController } from './community_members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityMember } from './entities/community_member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityMember])],
  controllers: [CommunityMembersController],
  providers: [CommunityMembersService],
  exports: [CommunityMembersService],
})
export class CommunityMembersModule {}
