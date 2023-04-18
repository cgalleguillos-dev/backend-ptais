import { ISemester } from "src/algorithm/utils/semester.interface";
import { IStudyPlain } from "src/algorithm/utils/study-plain.interface";

export class StudyPlain implements IStudyPlain {
    semesters: ISemester[];
    constructor() {
        this.semesters = [];
    }

    appendSemester(semester: ISemester): void {
        this.semesters.push(semester);
    }

    existCapstoneProject(): boolean {
        return this.semesters.some((s) => {
            return s.courses.some((c) => c.credit === 30);
        });
    }

}