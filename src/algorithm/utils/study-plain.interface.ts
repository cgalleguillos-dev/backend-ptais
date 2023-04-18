import { ISemester } from "./semester.interface";

export interface IStudyPlain {
    semesters: ISemester[];
    appendSemester(semester: ISemester): void;
    existCapstoneProject(): boolean;
}