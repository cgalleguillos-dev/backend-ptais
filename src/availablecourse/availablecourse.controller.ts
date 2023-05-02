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

  @Get(':codStudyPlain/:codCourse')
  findOne(@Param('codStudyPlain') codStudyPlain: string, @Param('codCourse') codCourse: string) {
    return this.availablecourseService.findOne(codStudyPlain, codCourse);
  }

  @Patch(':codStudyPlain/:codCourse')
  update(@Param('codStudyPlain') codStudyPlain: string, @Param('codCourse') codCourse: string, @Body() updateAvailablecourseDto: UpdateAvailablecourseDto) {
    return this.availablecourseService.update(codStudyPlain, codCourse, updateAvailablecourseDto);
  }

  @Delete(':codStudyPlain/:codCourse')
  remove(@Param('codStudyPlain') codStudyPlain: string, @Param('codCourse') codCourse: string) {
    return this.availablecourseService.remove(codStudyPlain, codCourse);
  }
}
