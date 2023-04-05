import { PartialType } from '@nestjs/mapped-types';
import { CreateCareerDto } from './create-career.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCareerDto extends PartialType(CreateCareerDto) {
    @IsString()
    @ApiProperty({
        description: 'Codigo de la carrera',
        example: '1234',
    })
    cod: string;

    @IsString()
    @ApiProperty({
        description: 'Nombre de la carrera',
        example: 'Ingenieria en computacion',
    })
    name: string;
}
