import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailablecourseDto } from './create-availablecourse.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAvailablecourseDto extends PartialType(CreateAvailablecourseDto) {
    @IsString()
    @ApiProperty({
        description: 'Codigo deL plan de estudio',
        example: '202010',
    })
    cod_study_plain: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo del curso',
        example: '202010',
    })
    cod_course: string;

    @IsNumber()
    @ApiProperty({
        description: 'Nivel del curso',
        example: 1,
    })
    level: number;
}
