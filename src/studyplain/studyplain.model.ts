import { Column, Model, Table } from 'sequelize-typescript';
import { Studyplain } from './entities/studyplain.entity';

@Table({
    tableName: 'study_plain',
    timestamps: false,
})
export class StudyplainModel extends Model<StudyplainModel> implements Studyplain {
    @Column({
        primaryKey: true,
    })
    cod: string;

    @Column
    name: string;

    @Column
    cod_career: string;
}