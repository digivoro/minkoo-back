import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommunityMemberRolesService } from './community_member_roles.service';
import { CreateCommunityMemberRoleDto } from './dto/create-community_member_role.dto';
import { UpdateCommunityMemberRoleDto } from './dto/update-community_member_role.dto';

@Controller('member-roles')
export class CommunityMemberRolesController {
  constructor(
    private readonly communityMemberRolesService: CommunityMemberRolesService,
  ) {}

  @Post()
  create(@Body() createMemberRoleDto: CreateCommunityMemberRoleDto) {
    return this.communityMemberRolesService.create(createMemberRoleDto);
  }

  @Get()
  findAll() {
    return this.communityMemberRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.communityMemberRolesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommunityMemberRoleDto: UpdateCommunityMemberRoleDto,
  ) {
    return this.communityMemberRolesService.update(
      +id,
      updateCommunityMemberRoleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.communityMemberRolesService.remove(+id);
  }
}
