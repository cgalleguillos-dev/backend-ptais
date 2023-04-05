import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CareerModel } from './career.model';
import { genericFindByCod } from 'src/utils/sequelize.utils';

@Injectable()
export class CareerService {

  constructor(@InjectModel(CareerModel) private careerModels: typeof CareerModel) { }

  private async findCareerByCod(cod: string): Promise<CareerModel> {
    return await genericFindByCod(this.careerModels, cod);
  }

  async create(createCareerDto: CreateCareerDto): Promise<CareerModel> {
    const career = await this.careerModels.findOne({
      where: {
        cod: createCareerDto.cod
      }
    });
    if (career) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.careerModels.create(createCareerDto);

  }

  async findAll(): Promise<CareerModel[]> {
    return await this.careerModels.findAll();
  }

  async findOne(cod: string): Promise<CareerModel> {
    return await this.findCareerByCod(cod);
  }

  async update(cod: string, updateCareerDto: UpdateCareerDto): Promise<CareerModel> {
    const career = await this.findCareerByCod(cod);
    await career.update(updateCareerDto);
    return career;
  }

  async remove(cod: string): Promise<CareerModel> {
    const career = await this.findCareerByCod(cod);
    await career.destroy();
    return career;
  }
}
