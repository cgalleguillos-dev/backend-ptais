import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':rut')
  findOne(@Param('rut') rut: string) {
    return this.personService.findOne(rut);
  }

  @Patch(':rut')
  update(@Param('rut') rut: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(rut, updatePersonDto);
  }

  @Delete(':rut')
  remove(@Param('rut') rut: string) {
    return this.personService.remove(rut);
  }
}
