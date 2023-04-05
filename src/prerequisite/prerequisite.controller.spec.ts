import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisiteController } from './prerequisite.controller';
import { PrerequisiteService } from './prerequisite.service';

describe('PrerequisiteController', () => {
  let controller: PrerequisiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerequisiteController],
      providers: [PrerequisiteService],
    }).compile();

    controller = module.get<PrerequisiteController>(PrerequisiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
