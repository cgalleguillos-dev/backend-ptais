import { PartialType } from '@nestjs/mapped-types';
import { CreateStudyplainDto } from './create-studyplain.dto';

export class UpdateStudyplainDto extends PartialType(CreateStudyplainDto) {
    cod: string;
    name: string;
    cod_career: string;
}
