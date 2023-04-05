import { Module } from '@nestjs/common';
import { PrerequisiteService } from './prerequisite.service';
import { PrerequisiteController } from './prerequisite.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrerequisiteModel } from './prerequisite.model';

@Module({
  imports: [SequelizeModule.forFeature([PrerequisiteModel])],
  controllers: [PrerequisiteController],
  providers: [PrerequisiteService]
})
export class PrerequisiteModule { }
