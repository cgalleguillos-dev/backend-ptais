import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    cod: string;
    name: string;
    semester: number;
    credit: number;
}
