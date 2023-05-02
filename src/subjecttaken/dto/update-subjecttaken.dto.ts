import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjecttakenDto } from './create-subjecttaken.dto';
import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubjecttakenDto extends PartialType(CreateSubjecttakenDto) {
    @IsString()
    @ApiProperty({
        description: 'Codigo del curso',
        example: 'ABC123',
    })
    cod_course: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo del plan de estudio',
        example: '202010',
    })
    cod_plain: string;

    @IsString()
    @ApiProperty({
        description: 'Rut del estudiante',
        example: '123456789',
    })
    rut: string;

    @IsNumber()
    @ApiProperty({
        description: 'Nota del curso',
        example: 5,
    })
    qualification: number;

    @IsBoolean()
    @ApiProperty({
        description: 'Aprobado o no',
        example: true,
    })
    approved: boolean;
}
