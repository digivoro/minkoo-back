import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CommunitiesModule } from './communities/communities.module';
import { UsersModule } from './users/users.module';
import { DatabaseTestService } from './database/database-test.service';
import { AuthModule } from './auth/auth.module';
import { CommunityMembersModule } from './community_members/community_members.module';
import { CommunityMemberRolesModule } from './community_member_roles/community_member_roles.module';

@Module({
  imports: [
    UsersModule,
    CommunitiesModule,
    DatabaseModule,
    AuthModule,
    CommunityMembersModule,
    CommunityMemberRolesModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseTestService],
})
export class AppModule {}
