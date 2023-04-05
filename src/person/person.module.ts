import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonModel } from './person.model';

@Module({
  imports: [SequelizeModule.forFeature([PersonModel])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule { }
