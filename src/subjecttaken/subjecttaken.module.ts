import { Module } from '@nestjs/common';
import { SubjecttakenService } from './subjecttaken.service';
import { SubjecttakenController } from './subjecttaken.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subjecttaken } from './entities/subjecttaken.entity';

@Module({
  imports: [SequelizeModule.forFeature([Subjecttaken])],
  controllers: [SubjecttakenController],
  providers: [SubjecttakenService]
})
export class SubjecttakenModule { }
