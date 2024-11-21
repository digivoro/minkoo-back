import { Injectable } from '@nestjs/common';
import { CreateCommunityMemberDto } from './dto/create-community_member.dto';
import { UpdateCommunityMemberDto } from './dto/update-community_member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommunityMember } from './entities/community_member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommunityMembersService {
  constructor(
    @InjectRepository(CommunityMember)
    private communityMemberRepository: Repository<CommunityMember>,
  ) {}

  create(createCommunityMemberDto: CreateCommunityMemberDto) {
    const cm = this.communityMemberRepository.create(createCommunityMemberDto);
    return this.communityMemberRepository.save(cm);
  }

  findAll() {
    return `This action returns all communityMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} communityMember`;
  }

  update(id: number, updateCommunityMemberDto: UpdateCommunityMemberDto) {
    return `This action updates a #${id} communityMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} communityMember`;
  }
}
