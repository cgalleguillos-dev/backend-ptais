import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModel } from './student.model';

@Module({
  imports: [SequelizeModule.forFeature([StudentModel])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule { }
