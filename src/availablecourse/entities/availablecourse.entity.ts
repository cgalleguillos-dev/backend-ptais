import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'available_courses',
    timestamps: false,
})
export class AvailableCourse extends Model<AvailableCourse> {
    @Column({
        primaryKey: true,
    })
    cod_study_plain: string;

    @Column({
        primaryKey: true,
    })
    cod_course: string;

    @Column
    level: number;
}
