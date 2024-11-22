import { ConflictException, Injectable } from '@nestjs/common';
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
    try {
      let cm;
      // Check for pre-existence
      cm = this.communityMemberRepository.findOne({
        where: {
          userId: createCommunityMemberDto.userId,
        },
      });
      if (cm) {
        throw new ConflictException();
      }
      cm = this.communityMemberRepository.create({
        ...createCommunityMemberDto,
        roleId: 4,
      });
      return this.communityMemberRepository.save(cm);
    } catch (err) {
      throw err;
    }
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

  findUserCommunities(userId: number) {
    return this.communityMemberRepository.find({
      where: {
        userId,
      },
    });
  }
}
