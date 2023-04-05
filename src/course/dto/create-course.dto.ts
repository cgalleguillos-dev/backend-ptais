import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
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
