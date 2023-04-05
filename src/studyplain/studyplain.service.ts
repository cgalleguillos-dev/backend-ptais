import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudyplainDto } from './dto/create-studyplain.dto';
import { UpdateStudyplainDto } from './dto/update-studyplain.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StudyplainModel } from './studyplain.model';
import { genericFindByCod } from 'src/utils/sequelize.utils';

@Injectable()
export class StudyplainService {
  constructor(@InjectModel(StudyplainModel) private studyplainModels: typeof StudyplainModel) { }

  async create(createStudyplainDto: CreateStudyplainDto): Promise<StudyplainModel> {
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

  async findAll(): Promise<StudyplainModel[]> {
    return await this.studyplainModels.findAll();
  }

  async findOne(cod: string): Promise<StudyplainModel> {
    return await genericFindByCod(this.studyplainModels, cod);
  }

  async update(cod: string, updateStudyplainDto: UpdateStudyplainDto): Promise<StudyplainModel> {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.update(updateStudyplainDto);
    return studyplain;
  }

  async remove(cod: string): Promise<StudyplainModel> {
    const studyplain = await genericFindByCod(this.studyplainModels, cod);
    await studyplain.destroy();
    return studyplain;
  }
}
