import { Module } from '@nestjs/common';
import { AvailablecourseService } from './availablecourse.service';
import { AvailablecourseController } from './availablecourse.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AvailableCourse } from './entities/availablecourse.entity';

@Module({
  imports: [SequelizeModule.forFeature([AvailableCourse])],
  controllers: [AvailablecourseController],
  providers: [AvailablecourseService]
})
export class AvailablecourseModule { }
