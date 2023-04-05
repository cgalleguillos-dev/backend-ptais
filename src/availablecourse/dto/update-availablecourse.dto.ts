import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailablecourseDto } from './create-availablecourse.dto';

export class UpdateAvailablecourseDto extends PartialType(CreateAvailablecourseDto) {
    cod_study_plain: string;
    cod_course: string;
    level: number;
}
