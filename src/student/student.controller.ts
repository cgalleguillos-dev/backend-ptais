import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':rutPerson/:codPlain')
  findOne(@Param('rutPerson') rutPerson: string, @Param('codPlain') codPlain) {
    return this.studentService.findOne(rutPerson, codPlain);
  }

  @Patch(':rutPersona/:codPlain')
  update(@Param('rutPerson') rutPerson: string, @Param('codPlain') codPlain: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(rutPerson, codPlain, updateStudentDto);
  }

  @Delete(':rutPersona/:codPlain')
  remove(@Param('rutPerson') rutPerson: string, @Param('codPlain') codPlain: string) {
    return this.studentService.remove(rutPerson, codPlain);
  }
}
