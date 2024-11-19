import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectRepository(Community)
    private communitiesRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    const community = this.communitiesRepository.create(createCommunityDto);
    return this.communitiesRepository.save(community);
  }

  findAll() {
    return this.communitiesRepository.find();
  }

  async findOne(id: number) {
    const community = await this.communitiesRepository.findOne({
      where: { id },
    });
    if (!community) {
      throw new NotFoundException(`Community with ID ${id} not found`);
    }
    return community;
  }

  async update(id: number, updateCommunityDto: UpdateCommunityDto) {
    const community = await this.findOne(id);
    Object.assign(community, updateCommunityDto);
    return this.communitiesRepository.save(community);
  }

  async remove(id: number) {
    const community = await this.findOne(id);
    return this.communitiesRepository.remove(community);
  }
}
