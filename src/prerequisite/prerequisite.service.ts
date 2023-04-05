import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PrerequisiteModel } from './prerequisite.model';

@Injectable()
export class PrerequisiteService {

  constructor(@InjectModel(PrerequisiteModel) private prerequisiteModels: typeof PrerequisiteModel) { }

  private async findPrerequisiteByCodPlainAndCodCourse(codPlain: string, codCourse: string): Promise<PrerequisiteModel> {
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

  async create(createPrerequisiteDto: CreatePrerequisiteDto): Promise<PrerequisiteModel> {
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

  async findAll(): Promise<PrerequisiteModel[]> {
    return await this.prerequisiteModels.findAll();
  }

  async findOne(codPlain: string, codCourse: string): Promise<PrerequisiteModel> {
    return await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
  }

  async update(codPlain: string, codCourse: string, updatePrerequisiteDto: UpdatePrerequisiteDto): Promise<PrerequisiteModel> {
    const prerequisite = await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
    await prerequisite.update(updatePrerequisiteDto);
    return prerequisite;
  }

  async remove(codPlain: string, codCourse: string): Promise<PrerequisiteModel> {
    const prerequisite = await this.findPrerequisiteByCodPlainAndCodCourse(codPlain, codCourse);
    await prerequisite.destroy();
    return prerequisite;
  }
}
