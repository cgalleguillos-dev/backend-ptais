import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StudentModule } from 'src/student/student.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StudentModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }), JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
