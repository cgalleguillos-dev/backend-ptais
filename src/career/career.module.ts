import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Career } from './entities/career.entity';

@Module({
  imports: [SequelizeModule.forFeature([Career])],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule { }
