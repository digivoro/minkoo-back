import { Module } from '@nestjs/common';
import { CommunitiesController } from './communities.controller';
import { CommunitiesService } from './communities.service';
import { CommunitySeedService } from './seed/community.seed';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community])],
  controllers: [CommunitiesController],
  providers: [CommunitiesService, CommunitySeedService],
  exports: [CommunitiesService],
})
export class CommunitiesModule {}
