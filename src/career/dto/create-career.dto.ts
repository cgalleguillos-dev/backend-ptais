import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCareerDto {
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
