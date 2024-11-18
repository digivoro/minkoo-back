import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CommunitiesModule } from './communities/communities.module';
import { MarketsModule } from './markets/markets.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseTestService } from './database/database-test.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    CommunitiesModule,
    MarketsModule,
    ProductsModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseTestService],
})
export class AppModule {}
