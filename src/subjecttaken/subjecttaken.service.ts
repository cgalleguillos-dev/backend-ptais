import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjecttakenDto } from './dto/create-subjecttaken.dto';
import { UpdateSubjecttakenDto } from './dto/update-subjecttaken.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Subjecttaken } from './entities/subjecttaken.entity';

@Injectable()
export class SubjecttakenService {

  constructor(@InjectModel(Subjecttaken)
  private subjecttakenModels: typeof Subjecttaken) { }

  private async findSubjecttaken(codCourse: string, codPlain: string, rut: string): Promise<Subjecttaken> {
    const subjectTaken = await this.subjecttakenModels.findOne({
      where: {
        cod_course: codCourse,
        cod_plain: codPlain,
        rut_person: rut
      }
    });
    if (!subjectTaken) {
      throw new NotFoundException('Subjecttaken not found');
    }
    return subjectTaken;
  }

  async create(createSubjecttakenDto: CreateSubjecttakenDto): Promise<Subjecttaken> {
    const subjectTaken = await this.subjecttakenModels.findOne({
      where: {
        cod_course: createSubjecttakenDto.cod_course,
        cod_plain: createSubjecttakenDto.cod_plain,
        rut_person: createSubjecttakenDto.rut
      }
    });
    if (subjectTaken) {
      throw new ConflictException('Subjecttaken already exists');
    }
    return await this.subjecttakenModels.create(createSubjecttakenDto);
  }

  async findAll(): Promise<Subjecttaken[]> {
    return await this.subjecttakenModels.findAll();
  }

  async findOne(codCourse: string, codPlain: string, rut: string): Promise<Subjecttaken> {
    return await this.findSubjecttaken(codCourse, codPlain, rut);
  }

  async update(codCourse: string, codPlain: string, rut: string, updateSubjecttakenDto: UpdateSubjecttakenDto): Promise<Subjecttaken> {
    const subjectTaken = await this.findSubjecttaken(codCourse, codPlain, rut);
    await subjectTaken.update(updateSubjecttakenDto);
    return subjectTaken;
  }

  async remove(codCourse: string, codPlain: string, rut: string): Promise<Subjecttaken> {
    const subjectTaken = await this.findSubjecttaken(codCourse, codPlain, rut);
    await subjectTaken.destroy();
    return subjectTaken;
  }

}
