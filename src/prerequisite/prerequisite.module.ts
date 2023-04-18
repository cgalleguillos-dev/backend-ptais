import { Module } from '@nestjs/common';
import { PrerequisiteService } from './prerequisite.service';
import { PrerequisiteController } from './prerequisite.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Prerequisite } from './entities/prerequisite.entity';

@Module({
  imports: [SequelizeModule.forFeature([Prerequisite])],
  controllers: [PrerequisiteController],
  providers: [PrerequisiteService],
  exports: [PrerequisiteService]
})
export class PrerequisiteModule { }
