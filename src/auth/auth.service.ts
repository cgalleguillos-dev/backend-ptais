import { Injectable, Request } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { StudentService } from 'src/student/student.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private studentService: StudentService,
    private jwtService: JwtService,
  ) { }

  async login(createAuthDto: CreateAuthDto) {
    const student = await this.studentService.findByRut(createAuthDto.rut);
    const payload = { rut: student.rut_person };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async refreshToken(createAuthDto: CreateAuthDto) {
    const student = await this.studentService.findByRut(createAuthDto.rut);
    const payload = { rut: student.rut_person };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // example(@Request() req) {

  // }
}
