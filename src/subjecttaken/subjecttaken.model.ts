import { Column, Model, Table } from 'sequelize-typescript';
import { Subjecttaken } from './entities/subjecttaken.entity';

@Table({
    tableName: 'subjects_taken',
    timestamps: false,
})
export class SubjecttakenModel extends Model<SubjecttakenModel> implements Subjecttaken {
    @Column({
        primaryKey: true,
    })
    cod_course: string;

    @Column({
        primaryKey: true,
    })
    cod_plain: string;

    @Column({
        primaryKey: true,
    })
    rut_person: string;

    @Column
    qualification: number;

    @Column
    approved: boolean;
}