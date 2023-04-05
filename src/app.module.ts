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
import { SubjecttakenModel } from './subjecttaken/subjecttaken.model';
import { PrerequisiteModule } from './prerequisite/prerequisite.module';
import { PersonModel } from './person/person.model';
import { StudentModel } from './student/student.model';
import { StudyplainModel } from './studyplain/studyplain.model';
import { CourseModel } from './course/course.model';
import { CareerModel } from './career/career.model';
import { AvailableCourseModel } from './availablecourse/availablecourse.model';
import { TokenMiddleware } from './middlewares/token.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [PersonModel, StudentModel, SubjecttakenModel, StudyplainModel, CourseModel, CareerModel, AvailableCourseModel]
    }),
    PersonModule, StudentModule, SubjecttakenModule, StudyplainModule, CourseModule, CareerModule, AvailablecourseModule,
    PrerequisiteModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
// export class AppModule implements NestModule {
//   configure(consumer: import("@nestjs/common").MiddlewareConsumer): any {
//     consumer
//       .apply(TokenMiddleware)
//       .forRoutes('person', 'student', 'subjecttaken', 'studyplain', 'course', 'career', 'availablecourse');
//   }
// }
