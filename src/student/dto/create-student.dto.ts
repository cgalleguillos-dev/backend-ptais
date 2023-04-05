import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @ApiProperty({
        description: 'Rut',
        example: '123456789',
    })
    rut_person: string;

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
