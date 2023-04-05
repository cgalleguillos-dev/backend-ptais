import { Column, Model, Table } from 'sequelize-typescript';
import { Person } from './entities/person.entity';

@Table({
    tableName: 'person',
    timestamps: false,
})
export class PersonModel extends Model<PersonModel> implements Person {
    @Column({
        primaryKey: true,
    })
    rut: string;

    @Column
    name: string;

    @Column
    name_2: string;

    @Column
    last_name: string;

    @Column
    last_name_2: string;

    @Column
    name_3: string;

    @Column
    last_name_3: string;
}
