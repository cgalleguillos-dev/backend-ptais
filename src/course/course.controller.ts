import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.courseService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(cod, updateCourseDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.courseService.remove(cod);
  }
}
