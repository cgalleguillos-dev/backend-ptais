import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'student',
    timestamps: false,
})
export class Student extends Model<Student>{
    @Column({
        primaryKey: true,
    })
    rut_person: string;

    @Column({
        primaryKey: true,
    })
    cod_plain: string;

    @Column
    year: string;
}
