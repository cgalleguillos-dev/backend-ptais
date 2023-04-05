import { Test, TestingModule } from '@nestjs/testing';
import { AvailablecourseService } from './availablecourse.service';

describe('AvailablecourseService', () => {
  let service: AvailablecourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailablecourseService],
    }).compile();

    service = module.get<AvailablecourseService>(AvailablecourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
