import { Test, TestingModule } from '@nestjs/testing';
import { SubjecttakenController } from './subjecttaken.controller';
import { SubjecttakenService } from './subjecttaken.service';

describe('SubjecttakenController', () => {
  let controller: SubjecttakenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjecttakenController],
      providers: [SubjecttakenService],
    }).compile();

    controller = module.get<SubjecttakenController>(SubjecttakenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
