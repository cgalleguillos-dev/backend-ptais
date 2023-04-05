import { Test, TestingModule } from '@nestjs/testing';
import { AvailablecourseController } from './availablecourse.controller';
import { AvailablecourseService } from './availablecourse.service';

describe('AvailablecourseController', () => {
  let controller: AvailablecourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailablecourseController],
      providers: [AvailablecourseService],
    }).compile();

    controller = module.get<AvailablecourseController>(AvailablecourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
