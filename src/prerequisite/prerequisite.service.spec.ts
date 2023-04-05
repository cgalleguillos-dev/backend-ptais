import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisiteService } from './prerequisite.service';

describe('PrerequisiteService', () => {
  let service: PrerequisiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrerequisiteService],
    }).compile();

    service = module.get<PrerequisiteService>(PrerequisiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
