import { Column, Model, Table } from 'sequelize-typescript';
import { Prerequisite } from './entities/prerequisite.entity';

@Table({
    tableName: 'prerequisite',
    timestamps: false,
})
export class PrerequisiteModel extends Model<PrerequisiteModel> implements Prerequisite {
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