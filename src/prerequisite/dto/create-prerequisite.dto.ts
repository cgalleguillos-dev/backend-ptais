import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePrerequisiteDto {
    @IsString()
    @ApiProperty({
        description: 'Codigo del plan de estudio',
        example: 'ABC123',
    })
    cod_plain: string;

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
