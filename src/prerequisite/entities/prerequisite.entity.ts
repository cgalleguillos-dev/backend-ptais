import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'prerequisite',
    timestamps: false,
})
export class Prerequisite extends Model<Prerequisite> {
    @Column({
        primaryKey: true,
    })
    cod_plain: string;

    @Column({
        primaryKey: true,
    })
    cod_course: string;

    @Column
    cod_course_pre: string;
}