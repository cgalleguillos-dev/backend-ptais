import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'subjects_taken',
    timestamps: false,
})
export class Subjecttaken extends Model<Subjecttaken> {
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
