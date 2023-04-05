import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseModel } from './course.model';

@Module({
  imports: [SequelizeModule.forFeature([CourseModel])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule { }
