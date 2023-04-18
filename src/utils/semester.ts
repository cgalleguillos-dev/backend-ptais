import { ICourse } from "src/algorithm/utils/course.interface";
import { ISemester } from "src/algorithm/utils/semester.interface";

export class Semester implements ISemester {
    semester: number;
    courses: ICourse[];

    constructor() {
        this.semester = null;
        this.courses = [];
    }

    setSemester(semester: number): void {
        this.semester = semester;
    }

    appendCourse(course: ICourse): void {
        this.courses.push(course);
    }

    getCourseBySemester(semester: number): ICourse[] {
        return this.courses.filter((course) => course.semester === semester);
    }

    setApproved(approved: boolean): void {
        this.courses.forEach((c) => {
            c.approved = approved;
        });
    }

    getCourseByCod(cod: string): ICourse {
        return this.courses.find(c => c.cod === cod) || null;
    }

    existCourse(cod: string): boolean {
        return this.courses.some((c) => {
            return c.cod === cod;
        });
    }

    size(): number {
        return this.courses.length;
    }

}