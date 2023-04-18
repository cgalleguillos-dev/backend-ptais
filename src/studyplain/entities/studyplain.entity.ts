import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'study_plain',
    timestamps: false,
})
export class Studyplain extends Model<Studyplain> {
    @Column({
        primaryKey: true,
    })
    cod: string;

    @Column
    name: string;

    @Column
    cod_career: string;
}