import { Test, TestingModule } from '@nestjs/testing';
import { CommunityMembersService } from './community_members.service';

describe('CommunityMembersService', () => {
  let service: CommunityMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunityMembersService],
    }).compile();

    service = module.get<CommunityMembersService>(CommunityMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
