import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAvailablecourseDto } from './dto/create-availablecourse.dto';
import { UpdateAvailablecourseDto } from './dto/update-availablecourse.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AvailableCourse } from './entities/availablecourse.entity';

@Injectable()
export class AvailablecourseService {

  constructor(@InjectModel(AvailableCourse) private availableCoursModels: typeof AvailableCourse) { }

  private async findAvailableCourse(codStudyPlain: string, codCourse: string): Promise<AvailableCourse> {
    const availableCourse = await this.availableCoursModels.findOne(
      {
        where: {
          cod_study_plain: codStudyPlain,
          cod_course: codCourse
        }
      }
    );
    if (!availableCourse) {
      throw new NotFoundException('El registro no existe');
    }
    return availableCourse;
  }

  async create(createAvailablecourseDto: CreateAvailablecourseDto): Promise<AvailableCourse> {
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

  async findAll(): Promise<AvailableCourse[]> {
    return await this.availableCoursModels.findAll();
  }

  async findOne(codStudyPlain: string, codCourse: string): Promise<AvailableCourse> {
    return await this.findAvailableCourse(codStudyPlain, codCourse);
  }

  async update(codStudyPlain: string, codCourse: string, updateAvailablecourseDto: UpdateAvailablecourseDto): Promise<AvailableCourse> {
    const availableCourse = await this.findAvailableCourse(codStudyPlain, codCourse);
    await availableCourse.update(updateAvailablecourseDto);
    return availableCourse

  }

  async remove(codStudyPlain: string, codCourse: string): Promise<AvailableCourse> {
    const availableCourse = await this.findAvailableCourse(codStudyPlain, codCourse);
    availableCourse.destroy();
    return availableCourse
  }
}
