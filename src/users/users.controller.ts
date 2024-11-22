import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommunityMembersService } from 'src/community_members/community_members.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly communityMemberService: CommunityMembersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  fetchProfile(@Req() req) {
    return this.usersService.findOne(req.user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('joined-communities')
  joinedCommunities(@Req() req) {
    return this.communityMemberService.findUserCommunities(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('join/:communityId')
  joinCommunity(@Req() req, @Param('communityId') communityId) {
    return this.communityMemberService.create({
      userId: req.user.userId,
      communityId,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
