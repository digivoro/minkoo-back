import { Controller, Get, Param } from '@nestjs/common';
import { CommunitiesService } from './communities.service';

@Controller('communities')
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Get()
  findAll() {
    return this.communitiesService.findAll();
  }

  @Get(':id')
  async getDetails(@Param('id') id: string) {
    const communityDetails = await this.communitiesService.getDetails(+id);
    return communityDetails;
  }
}
