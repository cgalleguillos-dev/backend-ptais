import { Injectable } from '@nestjs/common';
import { ISemester } from 'src/algorithm/utils/semester.interface';
import { Semester } from 'src/utils/semester';
import { CourseService } from 'src/course/course.service';
import { StudentService } from 'src/student/student.service';
import { Course } from 'src/utils/course';

@Injectable()
export class RunAlgorithmService {

    constructor(
        private courseService: CourseService,
        private studentService: StudentService
    ) { }


    public setCoursesApproved(semesterAux: ISemester, asignatures: ISemester): void {
        semesterAux.courses.forEach((c) => {
            asignatures.courses.forEach((a) => {
                if (c.cod === a.cod) {
                    c.approved = true;
                }
            })
        })
    }

    public updateSemester(semester: ISemester): ISemester {
        const newSemester = new Semester();
        semester.courses.forEach((c) => {
            newSemester.appendCourse({
                cod: c.cod,
                name: c.name,
                credit: c.credit,
                semester: c.semester,
                approved: c.approved
            });
        });
        return newSemester;

    }

    async coursesToSemester(rut: string, codPlain: string): Promise<ISemester> {
        const semester = new Semester();
        const courses = await this.courseService.findSubjectsTaken(rut, codPlain);
        courses.forEach((course) => {
            semester.appendCourse({
                cod: course.cod,
                name: course.name,
                credit: course.credit,
                semester: course.semester,
                approved: course.approved
            });
        });
        return semester;
    }

    public setNewLevelStudent(semester: ISemester): number {
        let level = 9999;
        semester.courses.forEach((course) => {
            if (!course.approved) {
                if (course.semester < level) {
                    level = course.semester;
                }
            }
        });
        return level;
    }

    public appendInitialCourses(semester: ISemester, level: number): ISemester {
        const initialSemester = new Semester();
        semester.courses.forEach((course) => {
            if (course.semester === level && course.approved) {
                initialSemester.appendCourse(course);
            }
        });
        return initialSemester;
    }

    async getCreditAverageApproved(rut: string, useAverage: boolean): Promise<number> {
        return useAverage ? 30 : await this.studentService.getAverage(rut);
    }
}