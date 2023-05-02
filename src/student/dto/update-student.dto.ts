import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @IsString()
    @ApiProperty({
        description: 'Rut',
        example: '123456789',
    })
    rut: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo del plan de estudio',
        example: '202010',
    })
    cod_plain: string;

    @IsString()
    @ApiProperty({
        description: 'Año de ingreso',
        example: '2020',
    })
    year: string;
}
