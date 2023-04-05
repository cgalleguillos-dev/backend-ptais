import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrerequisiteService } from './prerequisite.service';
import { CreatePrerequisiteDto } from './dto/create-prerequisite.dto';
import { UpdatePrerequisiteDto } from './dto/update-prerequisite.dto';

@Controller('prerequisite')
export class PrerequisiteController {
  constructor(private readonly prerequisiteService: PrerequisiteService) { }

  @Post()
  create(@Body() createPrerequisiteDto: CreatePrerequisiteDto) {
    return this.prerequisiteService.create(createPrerequisiteDto);
  }

  @Get()
  findAll() {
    return this.prerequisiteService.findAll();
  }

  @Get(':codPlain/:codCourse')
  findOne(@Param('codPlain') codPlain: string, @Param('codCourse') codCourse: string) {
    return this.prerequisiteService.findOne(codPlain, codCourse);
  }

  @Patch(':codPlain/:codCourse')
  update(@Param('codPlain') codPlain: string, @Param('codCourse') codCourse: string, @Body() updatePrerequisiteDto: UpdatePrerequisiteDto) {
    return this.prerequisiteService.update(codPlain, codCourse, updatePrerequisiteDto);
  }

  @Delete(':codPlain/:codCourse')
  remove(@Param('codPlain') codPlain: string, @Param('codCourse') codCourse: string) {
    return this.prerequisiteService.remove(codPlain, codCourse);
  }
}
