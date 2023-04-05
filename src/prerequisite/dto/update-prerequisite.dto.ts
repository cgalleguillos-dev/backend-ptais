import { PartialType } from '@nestjs/mapped-types';
import { CreatePrerequisiteDto } from './create-prerequisite.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePrerequisiteDto extends PartialType(CreatePrerequisiteDto) {
    @IsString()
    @ApiProperty({
        description: 'Codigo del curso',
        example: 'ABC123',
    })
    cod_course: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo del curso pre-requisito',
        example: 'ABC123',
    })
    cod_prerequisite: string;
}
