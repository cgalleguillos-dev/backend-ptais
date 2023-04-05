import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class CreatePersonDto {
    @IsString()
    @ApiProperty({
        description: 'Rut',
        example: '123456789',
    })
    rut: string;

    @IsString()
    @ApiProperty({
        description: 'Nombre',
        example: 'Juan',
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'Segundo nombre',
        example: 'Pablo',
    })
    name_2: string;

    @IsString()
    @ApiProperty({
        description: 'Apellido',
        example: 'Perez',
    })
    last_name: string;

    @IsString()
    @ApiProperty({
        description: 'Segundo apellido',
        example: 'Gonzalez',
    })
    last_name_2: string;

    @IsString()
    @IsEmpty()
    @ApiProperty({
        description: 'Tercer nombre',
        example: 'Pablo',
        nullable: true,
    })
    name_3: string;

    @IsString()
    @IsEmpty()
    @ApiProperty({
        description: 'Tercer apellido',
        example: 'Perez',
        nullable: true,
    })
    last_name_3: string;
}
