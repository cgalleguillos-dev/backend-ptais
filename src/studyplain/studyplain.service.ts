import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudyplainDto } from './dto/create-studyplain.dto';
import { UpdateStudyplainDto } from './dto/update-studyplain.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StudyplainModel } from './studyplain.model';
import { genericFindByCod } from 'src/utils/sequelize.utils';

@Injectable()
export class StudyplainService {
  constructor(@InjectModel(StudyplainModel) private studyplainModels: typeof StudyplainModel) { }


  async create(createStudyplainDto: CreateStudyplainDto) {
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

  async findAll() {
    const studyplain = await this.studyplainModels.findAll();
    return {
      studyplain: studyplain,
    };
  }

  async findOne(cod: string) {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    return {
      studyplain: studyplain,
    };
  }

  async update(cod: string, updateStudyplainDto: UpdateStudyplainDto) {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.update(updateStudyplainDto);
    return {
      studyplain: studyplain,
    };
  }

  async remove(cod: string) {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.destroy();
    return {
      studyplain: studyplain,
    };
  }
}
