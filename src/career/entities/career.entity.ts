import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'career',
    timestamps: false,
})
export class Career extends Model<Career> {
    @Column({
        primaryKey: true,
    })
    cod: string;

    @Column
    name: string;
}
