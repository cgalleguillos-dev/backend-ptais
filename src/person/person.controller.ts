import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Auth } from 'src/auth/auth.decorator';
import { JWTPayload } from 'src/auth/jwt.payload';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get('all')
  findAll() {
    return this.personService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('me')
  findOne(@Auth() { rut }: JWTPayload) {
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
