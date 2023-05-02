import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from './entities/person.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [SequelizeModule.forFeature([Person]), AuthModule],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule { }
