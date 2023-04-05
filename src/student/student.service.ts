import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StudentModel } from './student.model';

@Injectable()
export class StudentService {

  constructor(@InjectModel(StudentModel) private studentModel: typeof StudentModel) { }

  private async findStudent(rutPerson: string, codPlain: string): Promise<StudentModel> {
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

  async create(createStudentDto: CreateStudentDto) {
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

  async findAll() {
    const students = await this.studentModel.findAll();
    return {
      students: students,
    };
  }

  async findOne(rutPerson: string, codPlain: string) {
    const student = await this.findStudent(rutPerson, codPlain);
    return {
      student: student,
    };
  }

  async update(rutPerson: string, codPlain: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.findStudent(rutPerson, codPlain);
    await student.update(updateStudentDto);
    return {
      student: student,
    };
  }

  async remove(rutPerson: string, codPlain: string) {
    const student = await this.findStudent(rutPerson, codPlain);
    await student.destroy();
    return {
      student: student,
    };
  }
}
