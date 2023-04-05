import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
    rut: string;
    name: string;
    name_2: string;
    last_name: string;
    last_name_2: string;
    name_3: string;
    last_name_3: string;
}
