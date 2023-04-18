import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/sequelize';
import { QueryTypes } from 'sequelize';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectModel(Student) private studentModel: typeof Student) { }

  private async findStudent(rutPerson: string, codPlain: string): Promise<Student> {
    const student = await this.studentModel.findOne({
      where: {
        rut_person: rutPerson,
        cod_plain: codPlain,
      },
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async findByRut(rutPerson: string): Promise<Student> {
    const student = await this.studentModel.findOne({
      where: {
        rut_person: rutPerson,
      },
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentModel.findOne({
      where: {
        rut_person: createStudentDto.rut_person,
        cod_plain: createStudentDto.cod_plain,
      },
    });
    if (student) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.studentModel.create(createStudentDto);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.findAll();
  }

  async findOne(rutPerson: string, codPlain: string): Promise<Student> {
    return await this.findStudent(rutPerson, codPlain);
  }

  async update(rutPerson: string, codPlain: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findStudent(rutPerson, codPlain);
    await student.update(updateStudentDto);
    return student;
  }

  async remove(rutPerson: string, codPlain: string): Promise<Student> {
    const student = await this.findStudent(rutPerson, codPlain);
    await student.destroy();
    return student;
  }

  async getLevel(rutPerson: string, codStudyPlain: string): Promise<number> {
    const response = await this.studentModel.sequelize.query<{ level: number }>('SELECT get_level_student as level FROM get_level_student(:rut, :cod_study_plain)', {
      replacements: {
        rut: rutPerson,
        cod_study_plain: codStudyPlain
      },
      type: QueryTypes.SELECT,
    });
    return response[0].level;
  }

  async getAverage(rutPerson: string): Promise<number> {
    const response = await this.studentModel.sequelize.query<{ average: number }>('SELECT get_average_approval as average FROM get_average_approval(:rut)', {
      replacements: {
        rut: rutPerson,
      },
      type: QueryTypes.SELECT,
    });
    return response[0].average;
  }

}
