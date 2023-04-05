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

  async create(createCourseDto: CreateCourseDto): Promise<CourseModel> {
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

  async findAll(): Promise<CourseModel[]> {
    return await this.courseModels.findAll();
  }

  async findOne(cod: string): Promise<CourseModel> {
    return await this.findCourseByCod(cod);
  }

  async update(cod: string, updateCourseDto: UpdateCourseDto): Promise<CourseModel> {
    const course = await this.findCourseByCod(cod);
    await course.update(updateCourseDto);
    return course;

  }

  async remove(cod: string): Promise<CourseModel> {
    const course = await this.findCourseByCod(cod);
    await course.destroy();
    return course;
  }
}
