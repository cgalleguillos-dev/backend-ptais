import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Prerequisite } from './entities/prerequisite.entity';

@Injectable()
export class PrerequisiteService {

  constructor(@InjectModel(Prerequisite) private prerequisiteModels: typeof Prerequisite) { }

  private async findPrerequisiteByCodPlainAndCodCourse(codPlain: string, codCourse: string): Promise<Prerequisite> {
    const prerequisite = await this.prerequisiteModels.findOne({
      where: {
        cod_plain: codPlain,
        cod_course: codCourse
      }
    });
    if (!prerequisite) {
      throw new NotFoundException('El registro no existe');
    }
    return prerequisite;
  }

  async create(createPrerequisiteDto: CreatePrerequisiteDto): Promise<Prerequisite> {
    const prerequisite = await this.prerequisiteModels.findOne({
      where: {
        cod_plain: createPrerequisiteDto.cod_plain,
        cod_course: createPrerequisiteDto.cod_course
      }
    });
    if (prerequisite) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.prerequisiteModels.create(createPrerequisiteDto);
  }

  async findAll(): Promise<Prerequisite[]> {
    return await this.prerequisiteModels.findAll();
  }

  async findOne(codPlain: string, codCourse: string): Promise<Prerequisite> {
    return await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
  }

  async update(codPlain: string, codCourse: string, updatePrerequisiteDto: UpdatePrerequisiteDto): Promise<Prerequisite> {
    const prerequisite = await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
    await prerequisite.update(updatePrerequisiteDto);
    return prerequisite;
  }

  async remove(codPlain: string, codCourse: string): Promise<Prerequisite> {
    const prerequisite = await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
    await prerequisite.destroy();
    return prerequisite;
  }

  async searchPrereq(cod: string): Promise<Prerequisite[]> {
    const prereq = await this.prerequisiteModels.findAll({
      where: {
        cod_plain: cod
      },
      attributes: ['cod_course', 'cod_course_pre']
    })
    return prereq
  }
}
