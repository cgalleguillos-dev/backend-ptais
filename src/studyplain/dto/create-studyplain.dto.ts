import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStudyplainDto {
    @IsString()
    @ApiProperty({
        description: 'Codigo del plan de estudio',
        example: '202010',
    })
    cod: string;

    @IsString()
    @ApiProperty({
        description: 'Nombre del plan de estudio',
        example: 'Plan de estudio 2020-2021',
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo de la carrera',
        example: '1234',
    })
    cod_career: string;
}
