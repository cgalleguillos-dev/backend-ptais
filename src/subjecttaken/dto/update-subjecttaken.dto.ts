import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjecttakenDto } from './create-subjecttaken.dto';

export class UpdateSubjecttakenDto extends PartialType(CreateSubjecttakenDto) {
    cod_course: string;
    cod_plain: string;
    rut_person: string;
    qualification: number;
    approved: boolean;
}
