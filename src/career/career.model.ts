import { Column, Model, Table } from 'sequelize-typescript';
import { Career } from './entities/career.entity';

@Table({
    tableName: 'career',
    timestamps: false,
})
export class CareerModel extends Model<CareerModel> implements Career {
    @Column({
        primaryKey: true,
    })
    cod: string;

    @Column
    name: string;
}
