import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) { }

  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careerService.create(createCareerDto);
  }

  @Get()
  findAll() {
    return this.careerService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.careerService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careerService.update(cod, updateCareerDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.careerService.remove(cod);
  }
}
