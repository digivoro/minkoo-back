import { Test, TestingModule } from '@nestjs/testing';
import { UserCommunityController } from './user-community.controller';

describe('UserCommunityController', () => {
  let controller: UserCommunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCommunityController],
    }).compile();

    controller = module.get<UserCommunityController>(UserCommunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
