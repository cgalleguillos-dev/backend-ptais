import { Column, Model, Table } from 'sequelize-typescript';
import { Student } from './entities/student.entity';

@Table({
    tableName: 'student',
    timestamps: false,
})
export class StudentModel extends Model<StudentModel> implements Student {
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
