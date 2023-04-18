import { Module } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { AlgorithmController } from './algorithm.controller';
import { PrerequisiteModule } from 'src/prerequisite/prerequisite.module';
import { RunAlgorithmModule } from 'src/services/run-algorithm.module';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [PrerequisiteModule, RunAlgorithmModule, StudentModule],
  controllers: [AlgorithmController],
  providers: [AlgorithmService]
})
export class AlgorithmModule { }
