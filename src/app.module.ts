import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CommunitiesModule } from './communities/communities.module';
import { UsersModule } from './users/users.module';
import { DatabaseTestService } from './database/database-test.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CommunitiesModule, DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, DatabaseTestService],
})
export class AppModule {}
