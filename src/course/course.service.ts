import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { genericFindByCod } from 'src/utils/sequelize.utils';
import { ICourse } from 'src/algorithm/utils/course.interface';
import { QueryTypes } from 'sequelize';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course) private courseModels: typeof Course) { }

  private async findCourseByCod(cod: string): Promise<Course> {
    return await genericFindByCod(this.courseModels, cod);
  }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
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

  async findAll(): Promise<Course[]> {
    return await this.courseModels.findAll();
  }

  async findOne(cod: string): Promise<Course> {
    return await this.findCourseByCod(cod);
  }

  async update(cod: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.findCourseByCod(cod);
    await course.update(updateCourseDto);
    return course;

  }

  async remove(cod: string): Promise<Course> {
    const course = await this.findCourseByCod(cod);
    await course.destroy();
    return course;
  }

  async findSubjectsTaken(rutPerson: string, codStudyPlain: string): Promise<ICourse[]> {
    const query = `
      SELECT st.cod_course as cod, c.name, c.credit, c.semester, st.approved
      FROM subjects_taken st
      INNER JOIN course c ON st.cod_course = c.cod
      WHERE st.rut_person = :rut_person AND st.cod_plain = :cod_study_plain
    `;
    const courses = await this.courseModels.sequelize.query<ICourse>(query, {
      replacements: {
        rut_person: rutPerson,
        cod_study_plain: codStudyPlain,
      },
      type: QueryTypes.SELECT,
    });
    return courses;
  }
}
