import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjecttakenService } from './subjecttaken.service';
import { CreateSubjecttakenDto } from './dto/create-subjecttaken.dto';
import { UpdateSubjecttakenDto } from './dto/update-subjecttaken.dto';

@Controller('subjecttaken')
export class SubjecttakenController {
  constructor(private readonly subjecttakenService: SubjecttakenService) { }

  @Post()
  create(@Body() createSubjecttakenDto: CreateSubjecttakenDto) {
    return this.subjecttakenService.create(createSubjecttakenDto);
  }

  @Get()
  findAll() {
    return this.subjecttakenService.findAll();
  }

  @Get(':codCourse/:codPlain/:rutPerson')
  findOne(@Param('codCourse') codCourse: string, @Param('codPlain') codPlain: string, @Param('rutPerson') rutPerson: string) {
    return this.subjecttakenService.findOne(codCourse, codPlain, rutPerson);
  }

  @Patch(':codCourse/:codPlain/:rutPerson')
  update(@Param('codCourse') codCourse: string, @Param('codPlain') codPlain: string, @Param('rutPerson') rutPerson: string, @Body() updateSubjecttakenDto: UpdateSubjecttakenDto) {
    return this.subjecttakenService.update(codCourse, codPlain, rutPerson, updateSubjecttakenDto);
  }

  @Delete(':codCourse/:codPlain/:rutPerson')
  remove(@Param('codCourse') codCourse: string, @Param('codPlain') codPlain: string, @Param('rutPerson') rutPerson: string) {
    return this.subjecttakenService.remove(codCourse, codPlain, rutPerson);
  }
}
