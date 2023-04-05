import { Column, Model, Table } from 'sequelize-typescript';
import { Course } from './entities/course.entity';

@Table({
    tableName: 'course',
    timestamps: false,
})
export class CourseModel extends Model<CourseModel> implements Course {
    @Column({
        primaryKey: true,
    })
    cod: string;

    @Column
    name: string;

    @Column
    semester: number;

    @Column
    credit: number;
}