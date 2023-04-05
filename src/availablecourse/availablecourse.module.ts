import { Module } from '@nestjs/common';
import { AvailablecourseService } from './availablecourse.service';
import { AvailablecourseController } from './availablecourse.controller';
import { AvailableCourseModel } from './availablecourse.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([AvailableCourseModel])],
  controllers: [AvailablecourseController],
  providers: [AvailablecourseService]
})
export class AvailablecourseModule { }
