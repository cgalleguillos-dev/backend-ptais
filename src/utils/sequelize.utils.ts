import { NotFoundException } from '@nestjs/common';
import { Model, ModelCtor } from 'sequelize-typescript';

export async function genericFindByCod<T extends Model>(
    model: ModelCtor<T>,
    cod: string): Promise<T> {
    const record = await model.findByPk(cod);
    if (!record) {
        throw new NotFoundException(
            `No se encontró ningún registro en la tabla ${model.name} con el código "${cod}".`
        );
    }
    return record;
}