import { Column, Model, Table } from 'sequelize-typescript';
import { AvailableCourse } from './entities/availablecourse.entity';

@Table({
    tableName: 'available_courses',
    timestamps: false,
})
export class AvailableCourseModel extends Model<AvailableCourseModel> implements AvailableCourse {
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