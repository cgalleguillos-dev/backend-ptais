import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsString()
    @ApiProperty({
        description: 'Codigo del curso',
        example: 'ABC123',
    })
    cod: string;

    @IsString()
    @ApiProperty({
        description: 'Nombre del curso',
        example: 'Curso de prueba',
    })
    name: string;

    @IsNumber()
    @ApiProperty({
        description: 'Semestre del curso',
        example: 1,
    })
    semester: number;

    @IsNumber()
    @ApiProperty({
        description: 'Creditos del curso',
        example: 5,
    })
    credit: number;
}
