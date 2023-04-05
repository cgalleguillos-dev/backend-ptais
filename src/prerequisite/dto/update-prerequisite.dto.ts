import { PartialType } from '@nestjs/mapped-types';
import { CreatePrerequisiteDto } from './create-prerequisite.dto';

export class UpdatePrerequisiteDto extends PartialType(CreatePrerequisiteDto) {
    cod_course: string;
    cod_prerequisite: string;
}
