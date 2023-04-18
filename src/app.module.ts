import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { StudentModule } from './student/student.module';
import { SubjecttakenModule } from './subjecttaken/subjecttaken.module';
import { StudyplainModule } from './studyplain/studyplain.module';
import { CourseModule } from './course/course.module';
import { CareerModule } from './career/career.module';
import { AvailablecourseModule } from './availablecourse/availablecourse.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrerequisiteModule } from './prerequisite/prerequisite.module';
import { TokenMiddleware } from './middlewares/token.middleware';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { Subjecttaken } from './subjecttaken/entities/subjecttaken.entity';
import { Studyplain } from './studyplain/entities/studyplain.entity';
import { Student } from './student/entities/student.entity';
import { Course } from './course/entities/course.entity';
import { Career } from './career/entities/career.entity';
import { AvailableCourse } from './availablecourse/entities/availablecourse.entity';
import { Prerequisite } from './prerequisite/entities/prerequisite.entity';
import { Person } from './person/entities/person.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    JwtModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Person, Student, Subjecttaken, Studyplain, Course, Career, AvailableCourse, Prerequisite]
    }),
    PersonModule, StudentModule, SubjecttakenModule, StudyplainModule, CourseModule, CareerModule, AvailablecourseModule,
    PrerequisiteModule,
    AuthModule,
    AlgorithmModule],
  controllers: [AppController],
  providers: [AppService],
})

// export class AppModule { }
export class AppModule implements NestModule {
  configure(consumer: import("@nestjs/common").MiddlewareConsumer): any {
    consumer
      .apply(TokenMiddleware)
      .forRoutes('person', 'student', 'subjecttaken', 'studyplain', 'course', 'career', 'availablecourse', 'algorithm');
  }
}
