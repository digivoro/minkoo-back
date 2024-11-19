import { Test, TestingModule } from '@nestjs/testing';
import { MemberRolesService } from './community_member_roles.service';

describe('MemberRolesService', () => {
  let service: MemberRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberRolesService],
    }).compile();

    service = module.get<MemberRolesService>(MemberRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
