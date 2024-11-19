import { Test, TestingModule } from '@nestjs/testing';
import { CommunityMemberRolesController } from './community_member_roles.controller';
import { CommunityMemberRolesService } from './community_member_roles.service';

describe('CommunityMemberRolesController', () => {
  let controller: CommunityMemberRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunityMemberRolesController],
      providers: [CommunityMemberRolesService],
    }).compile();

    controller = module.get<CommunityMemberRolesController>(
      CommunityMemberRolesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
