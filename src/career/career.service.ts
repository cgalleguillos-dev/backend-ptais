import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectModel } from '@nestjs/sequelize';
import { genericFindByCod } from 'src/utils/sequelize.utils';
import { Career } from './entities/career.entity';

@Injectable()
export class CareerService {

  constructor(@InjectModel(Career) private careerModels: typeof Career) { }

  private async findCareerByCod(cod: string): Promise<Career> {
    return await genericFindByCod(this.careerModels, cod);
  }

  async create(createCareerDto: CreateCareerDto): Promise<Career> {
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

  async findAll(): Promise<Career[]> {
    return await this.careerModels.findAll();
  }

  async findOne(cod: string): Promise<Career> {
    return await this.findCareerByCod(cod);
  }

  async update(cod: string, updateCareerDto: UpdateCareerDto): Promise<Career> {
    const career = await this.findCareerByCod(cod);
    await career.update(updateCareerDto);
    return career;
  }

  async remove(cod: string): Promise<Career> {
    const career = await this.findCareerByCod(cod);
    await career.destroy();
    return career;
  }
}
