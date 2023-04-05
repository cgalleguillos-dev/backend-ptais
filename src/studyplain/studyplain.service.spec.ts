import { Test, TestingModule } from '@nestjs/testing';
import { StudyplainService } from './studyplain.service';

describe('StudyplainService', () => {
  let service: StudyplainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyplainService],
    }).compile();

    service = module.get<StudyplainService>(StudyplainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
