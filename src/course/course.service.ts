import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CourseModel } from './course.model';
import { genericFindByCod } from 'src/utils/sequelize.utils';

@Injectable()
export class CourseService {
  constructor(@InjectModel(CourseModel) private courseModels: typeof CourseModel) { }

  private async findCourseByCod(cod: string): Promise<CourseModel> {
    return await genericFindByCod(this.courseModels, cod);
  }

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.courseModels.findOne({
      where: {
        cod: createCourseDto.cod
      }
    });

    if (course) {
      throw new ConflictException('El registro ya existe');
    }

    return await this.courseModels.create(createCourseDto);

  }

  async findAll() {
    const courses = await this.courseModels.findAll();
    return {
      courses: courses
    }
  }

  async findOne(cod: string) {
    const courses = await this.findCourseByCod(cod);
    return {
      courses: courses
    }
  }

  async update(cod: string, updateCourseDto: UpdateCourseDto) {
    const course = await this.findCourseByCod(cod);
    await course.update(updateCourseDto);

    return {
      course: course
    }
  }

  async remove(cod: string) {
    const course = await this.findCourseByCod(cod);
    await course.destroy();
    return {
      course: course
    }
  }
}
