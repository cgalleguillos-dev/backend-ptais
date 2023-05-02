import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAvailablecourseDto {
    @IsString()
    @ApiProperty({
        description: 'Codigo deL plan de estudio',
        example: '202010',
    })
    codStudyPlain: string;

    @IsString()
    @ApiProperty({
        description: 'Codigo del curso',
        example: '202010',
    })
    codCourse: string;

    @IsNumber()
    @ApiProperty({
        description: 'Nivel del curso',
        example: 1,
    })
    level: number;
}
