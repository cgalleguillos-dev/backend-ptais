import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailablecourseService } from './availablecourse.service';
import { CreateAvailablecourseDto } from './dto/create-availablecourse.dto';
import { UpdateAvailablecourseDto } from './dto/update-availablecourse.dto';

@Controller('availablecourse')
export class AvailablecourseController {
  constructor(private readonly availablecourseService: AvailablecourseService) { }

  @Post()
  create(@Body() createAvailablecourseDto: CreateAvailablecourseDto) {
    return this.availablecourseService.create(createAvailablecourseDto);
  }

  @Get()
  findAll() {
    return this.availablecourseService.findAll();
  }

  @Get(':cod_study_plain/:cod_course')
  findOne(@Param('cod_study_plain') codStudyPlain: string, @Param('cod_course') codCourse: string) {
    return this.availablecourseService.findOne(codStudyPlain, codCourse);
  }

  @Patch(':cod_study_plain/:cod_course')
  update(@Param('cod_study_plain') codStudyPlain: string, @Param('cod_course') codCourse: string, @Body() updateAvailablecourseDto: UpdateAvailablecourseDto) {
    return this.availablecourseService.update(codStudyPlain, codCourse, updateAvailablecourseDto);
  }

  @Delete(':cod_study_plain/:cod_course')
  remove(@Param('cod_study_plain') codStudyPlain: string, @Param('cod_course') codCourse: string) {
    return this.availablecourseService.remove(codStudyPlain, codCourse);
  }
}
