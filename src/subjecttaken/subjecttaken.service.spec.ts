import { Test, TestingModule } from '@nestjs/testing';
import { SubjecttakenService } from './subjecttaken.service';

describe('SubjecttakenService', () => {
  let service: SubjecttakenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjecttakenService],
    }).compile();

    service = module.get<SubjecttakenService>(SubjecttakenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
