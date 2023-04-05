import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PersonModel } from './person.model';

@Injectable()
export class PersonService {

  constructor(@InjectModel(PersonModel) private personModels: typeof PersonModel) { }

  private async findPersonByRut(rut: string): Promise<PersonModel> {
    const person = await this.personModels.findOne({
      where: {
        rut: rut
      }
    });
    if (!person) {
      throw new NotFoundException('El registro no existe');
    }
    return person;
  }

  async create(createPersonDto: CreatePersonDto): Promise<PersonModel> {
    const person = await this.personModels.findOne({
      where: {
        rut: createPersonDto.rut
      }
    });
    if (person) {
      throw new ConflictException('El registro ya existe');
    }
    return await this.personModels.create(createPersonDto);
  }

  async findAll(): Promise<PersonModel[]> {
    return await this.personModels.findAll();
  }

  async findOne(rut: string): Promise<PersonModel> {
    return await this.findPersonByRut(rut);
  }

  async update(rut: string, updatePersonDto: UpdatePersonDto): Promise<PersonModel> {
    const person = await this.findPersonByRut(rut);
    await person.update(updatePersonDto);
    return person;

  }

  async remove(rut: string): Promise<PersonModel> {
    const person = await this.findPersonByRut(rut);
    await person.destroy();
    return person;
  }
}
