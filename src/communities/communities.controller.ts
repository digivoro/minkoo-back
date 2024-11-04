import { Controller, Get, Logger, Param } from '@nestjs/common';
import { CommunitiesService } from './communities.service';

@Controller('communities')
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Get()
  findAll() {
    return this.communitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    Logger.log(`looking for community id: ${id}`);
    const community = await this.communitiesService.findOne(+id);
    Logger.log(JSON.stringify(community));
    return community;
  }
}
