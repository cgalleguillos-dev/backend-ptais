import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CareerModel } from './career.model';

@Module({
  imports: [SequelizeModule.forFeature([CareerModel])],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule { }
