import { Module } from '@nestjs/common';
import { SubjecttakenService } from './subjecttaken.service';
import { SubjecttakenController } from './subjecttaken.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubjecttakenModel } from './subjecttaken.model';

@Module({
  imports: [SequelizeModule.forFeature([SubjecttakenModel])],
  controllers: [SubjecttakenController],
  providers: [SubjecttakenService]
})
export class SubjecttakenModule { }
