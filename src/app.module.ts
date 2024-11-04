import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CommunitiesModule } from './communities/communities.module';
import { MarketsModule } from './markets/markets.module';
import { ProductsModule } from './products/products.module';
import { UserCommunityController } from './user-community/user-community.controller';
import { UserCommunityService } from './user-community/user-community.service';
import { UsersModule } from './users/users.module';
import { DatabaseTestService } from './database/database-test.service';

@Module({
  imports: [
    UsersModule,
    CommunitiesModule,
    MarketsModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController, UserCommunityController],
  providers: [AppService, UserCommunityService, DatabaseTestService],
})
export class AppModule {}
