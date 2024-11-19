import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityMemberRoleDto } from './create-community_member_role.dto';

export class UpdateCommunityMemberRoleDto extends PartialType(
  CreateCommunityMemberRoleDto,
) {}
