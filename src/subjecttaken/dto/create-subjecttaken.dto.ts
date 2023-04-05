import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateSubjecttakenDto {
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
    rut_person: string;

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
