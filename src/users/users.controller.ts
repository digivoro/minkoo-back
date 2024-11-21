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
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommunityMembersService } from 'src/community_members/community_members.service';
import { CreateCommunityMemberDto } from 'src/community_members/dto/create-community_member.dto';

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
    console.log('HOLA');
    return this.usersService.findOne(req.user?.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('join')
  joinCommunity(@Body() createCommunityMemberDto: CreateCommunityMemberDto) {
    Logger.log(createCommunityMemberDto, 'joinCommunity');
    return this.communityMemberService.create(createCommunityMemberDto);
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
