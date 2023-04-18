import { Module } from '@nestjs/common';
import { StudyplainService } from './studyplain.service';
import { StudyplainController } from './studyplain.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Studyplain } from './entities/studyplain.entity';

@Module({
  imports: [SequelizeModule.forFeature([Studyplain])],
  controllers: [StudyplainController],
  providers: [StudyplainService]
})
export class StudyplainModule { }
