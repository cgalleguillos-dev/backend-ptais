import { ICourse } from "src/algorithm/utils/course.interface";

export class Course implements ICourse {
    cod: string;
    name: string;
    credit: number;
    semester: number;
    approved: boolean;

    constructor(cod: string, name: string, credit: number, semester: number, approved: boolean) {
        this.cod = cod;
        this.name = name;
        this.credit = credit;
        this.semester = semester;
        this.approved = approved;
    }
}