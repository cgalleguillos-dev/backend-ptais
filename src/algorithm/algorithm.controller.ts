import { Body, Controller, Post } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { StudentRequest } from './dto/student-request.dto';

@Controller('algorithm')
export class AlgorithmController {
  constructor(
    private readonly algorithmService: AlgorithmService
  ) { }

  @Post()
  async runAlgorithm(@Body() studentRequest: StudentRequest) {
    return await this.algorithmService.runAlgorithm(studentRequest);
  }
}
