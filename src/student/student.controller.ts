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

  @Get(':rut/:codPlain')
  findOne(@Param('rut') rut: string, @Param('codPlain') codPlain) {
    return this.studentService.findOne(rut, codPlain);
  }

  @Patch(':rut/:codPlain')
  update(@Param('rut') rut: string, @Param('codPlain') codPlain: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(rut, codPlain, updateStudentDto);
  }

  @Delete(':rut/:codPlain')
  remove(@Param('rut') rut: string, @Param('codPlain') codPlain: string) {
    return this.studentService.remove(rut, codPlain);
  }

  @Get('averageCredits')
  getAverageCredits() {

    return this.studentService.getAverageCredits();
  }
}
