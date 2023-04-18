import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudyplainDto } from './dto/create-studyplain.dto';
import { UpdateStudyplainDto } from './dto/update-studyplain.dto';
import { InjectModel } from '@nestjs/sequelize';

import { genericFindByCod } from 'src/utils/sequelize.utils';
import { Studyplain } from './entities/studyplain.entity';

@Injectable()
export class StudyplainService {
  constructor(@InjectModel(Studyplain) private studyplainModels: typeof Studyplain) { }

  async create(createStudyplainDto: CreateStudyplainDto): Promise<Studyplain> {
    const studyplain = await this.studyplainModels.findOne({
      where: {
        cod: createStudyplainDto.cod,
      },
    });
    if (studyplain) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.studyplainModels.create(createStudyplainDto);
  }

  async findAll(): Promise<Studyplain[]> {
    return await this.studyplainModels.findAll();
  }

  async findOne(cod: string): Promise<Studyplain> {
    return await genericFindByCod(this.studyplainModels, cod);
  }

  async update(cod: string, updateStudyplainDto: UpdateStudyplainDto): Promise<Studyplain> {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.update(updateStudyplainDto);
    return studyplain;
  }

  async remove(cod: string): Promise<Studyplain> {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.destroy();
    return studyplain;
  }
}
