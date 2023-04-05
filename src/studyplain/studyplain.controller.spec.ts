import { Test, TestingModule } from '@nestjs/testing';
import { StudyplainController } from './studyplain.controller';
import { StudyplainService } from './studyplain.service';

describe('StudyplainController', () => {
  let controller: StudyplainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyplainController],
      providers: [StudyplainService],
    }).compile();

    controller = module.get<StudyplainController>(StudyplainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
