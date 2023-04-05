import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudyplainService } from './studyplain.service';
import { CreateStudyplainDto } from './dto/create-studyplain.dto';
import { UpdateStudyplainDto } from './dto/update-studyplain.dto';

@Controller('studyplain')
export class StudyplainController {
  constructor(private readonly studyplainService: StudyplainService) { }

  @Post()
  create(@Body() createStudyplainDto: CreateStudyplainDto) {
    return this.studyplainService.create(createStudyplainDto);
  }

  @Get()
  findAll() {
    return this.studyplainService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.studyplainService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateStudyplainDto: UpdateStudyplainDto) {
    return this.studyplainService.update(cod, updateStudyplainDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.studyplainService.remove(cod);
  }
}
