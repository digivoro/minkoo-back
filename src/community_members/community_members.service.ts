import { Injectable } from '@nestjs/common';
import { CreateCommunityMemberDto } from './dto/create-community_member.dto';
import { UpdateCommunityMemberDto } from './dto/update-community_member.dto';

@Injectable()
export class CommunityMembersService {
  create(createCommunityMemberDto: CreateCommunityMemberDto) {
    return 'This action adds a new communityMember';
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
