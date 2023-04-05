import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAvailablecourseDto } from './dto/create-availablecourse.dto';
import { UpdateAvailablecourseDto } from './dto/update-availablecourse.dto';
import { AvailableCourseModel } from './availablecourse.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AvailablecourseService {

  constructor(@InjectModel(AvailableCourseModel) private availableCoursModels: typeof AvailableCourseModel) { }

  async create(createAvailablecourseDto: CreateAvailablecourseDto) {
    const availableCourse = await this.availableCoursModels.findOne(
      {
        where: {
          cod_study_plain: createAvailablecourseDto.cod_study_plain,
          cod_course: createAvailablecourseDto.cod_course
        }
      }
    );
    if (availableCourse) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.availableCoursModels.create(createAvailablecourseDto);
  }

  async findAll() {
    const availableCourses = await this.availableCoursModels.findAll();
    return {
      availableCourses: availableCourses
    }
  }

  async findOne(codStudyPlain: string, codCourse: string) {
    const availableCourse = await this.availableCoursModels.findOne(
      {
        where: {
          cod_study_plain: codStudyPlain,
          cod_course: codCourse
        }
      }
    );
    return {
      availableCourse: availableCourse
    }
  }

  async update(codStudyPlain: string, codCourse: string, updateAvailablecourseDto: UpdateAvailablecourseDto) {
    const availableCourse = await this.availableCoursModels.findOne(
      {
        where: {
          cod_study_plain: codStudyPlain,
          cod_course: codCourse
        }
      }
    );
    if (availableCourse) {
      await availableCourse.update(updateAvailablecourseDto);
    }
    return {
      availableCourse: availableCourse
    }
  }

  async remove(codStudyPlain: string, codCourse: string) {
    const availableCourse = await this.availableCoursModels.findOne(
      {
        where: {
          cod_study_plain: codStudyPlain,
          cod_course: codCourse
        }
      });
    if (availableCourse) {
      availableCourse.destroy();
    }
    return {
      availableCourse: availableCourse
    }
  }
}
