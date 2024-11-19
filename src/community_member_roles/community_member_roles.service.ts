import { Injectable } from '@nestjs/common';
import { CreateCommunityMemberRoleDto } from './dto/create-community_member_role.dto';
import { UpdateCommunityMemberRoleDto } from './dto/update-community_member_role.dto';

@Injectable()
export class CommunityMemberRolesService {
  create(createCommunityMemberRoleDto: CreateCommunityMemberRoleDto) {
    return 'This action adds a new memberRole';
  }

  findAll() {
    return `This action returns all memberRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberRole`;
  }

  update(
    id: number,
    updateCommunityMemberRoleDto: UpdateCommunityMemberRoleDto,
  ) {
    return `This action updates a #${id} memberRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberRole`;
  }
}
