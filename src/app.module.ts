import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CommunitiesModule } from './communities/communities.module';
import { MarketsModule } from './markets/markets.module';
import { ProductsModule } from './products/products.module';
import { CommunitesService } from './communites/communites.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CommunitiesModule,
    MarketsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CommunitesService],
})
export class AppModule {}
