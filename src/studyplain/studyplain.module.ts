import { Module } from '@nestjs/common';
import { StudyplainService } from './studyplain.service';
import { StudyplainController } from './studyplain.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudyplainModel } from './studyplain.model';

@Module({
  imports: [SequelizeModule.forFeature([StudyplainModel])],
  controllers: [StudyplainController],
  providers: [StudyplainService]
})
export class StudyplainModule { }
