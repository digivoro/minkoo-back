import { Test, TestingModule } from '@nestjs/testing';
import { UserCommunityService } from './user-community.service';

describe('UserCommunityService', () => {
  let service: UserCommunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCommunityService],
    }).compile();

    service = module.get<UserCommunityService>(UserCommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
