import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'course',
    timestamps: false,
})
export class Course extends Model<Course> {
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
