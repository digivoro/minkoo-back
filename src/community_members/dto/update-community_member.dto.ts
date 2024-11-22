import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityMemberDto } from './create-community_member.dto';

export class UpdateCommunityMemberDto extends PartialType(
  CreateCommunityMemberDto,
) {}
