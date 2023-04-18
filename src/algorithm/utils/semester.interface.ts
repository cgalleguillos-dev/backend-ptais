import { ICourse } from './course.interface';

export interface ISemester {
    semester: number | null;
    courses: ICourse[];
    setSemester(semester: number): void;
    appendCourse(course: ICourse): void;
    getCourseBySemester(semester: number): ICourse[];
    setApproved(approved: boolean): void;
    getCourseByCod(cod: string): ICourse | null;
    existCourse(cod: string): boolean;
    size(): number;
}