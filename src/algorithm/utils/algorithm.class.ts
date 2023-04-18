import { INode } from "src/algorithm/utils/node.interface";
import { ISemester } from "src/algorithm/utils/semester.interface";
import { IPreRequisite } from "src/algorithm/utils/prerequisite.interface";
import { Semester } from "src/utils/semester";
import { NodeSemester } from "src/utils/node-semester";

export class Algorithm {

    private student: IStudent;
    private prerequisites: IPreRequisite[];
    private level: number;
    semester: ISemester;
    private creditAverageApproved: number;

    constructor(student: IStudent, prerequisites: IPreRequisite[], level: number,
        semester: ISemester, creditAverageApproved: number) {

        this.student = student;
        this.prerequisites = prerequisites;
        this.level = level;
        this.semester = semester;
        this.creditAverageApproved = creditAverageApproved;
        this.student.level = this.level;
    }

    run(semester: ISemester): ISemester {
        const initNode = new NodeSemester(semester);
        const openNodes = [];
        const closeNodes = [];
        openNodes.push(initNode)
        return this.executeAlgorithm(openNodes, closeNodes).semester;
    }

    private heuristic(node: INode): number {
        return node.semester.courses[0].credit - 30;
    }

    private searchPrereq(cod: string): string[] {
        return this.prerequisites
            .filter((prereq) => prereq.cod_course === cod)
            .map((prereq) => prereq.cod_course_pre);
    }

    private returnSolution(current: INode): INode {
        if (current.next === null) return current;
        while (current.next.next !== null) {
            current = current.next;
        }
        return current;
    }

    private executeAlgorithm(openNodes: INode[], closeNodes: INode[]): INode {
        while (openNodes.length > 0) {
            let i = 0;
            openNodes.map((n, index) => {
                if (n.f < openNodes[0].f)
                    i = index;

            });
            let current = openNodes.splice(i, 1)[0];
            if (this.isSolution(current)) return this.returnSolution(current);

            closeNodes.push(current);

            const successor: INode[] = [];

            const nextSemester = this.getNextSemester();
            successor.push(new NodeSemester(nextSemester));
            successor.forEach((s: INode) => {
                let best = false;
                let g = current.g + 1;

                if (!openNodes.includes(s)) {
                    s.h = this.heuristic(s);
                    openNodes.push(s);
                    best = true;
                } else if (current.g < s.g) {
                    best = true;
                }

                if (best)
                    s.next = current;
                s.g = g;
                s.f = s.g + s.h;

            });
        }
    }

    private getNextSemester(): ISemester {
        let sum = 0;
        const nextSemester: ISemester = new Semester();
        let j = this.student.level;
        while (sum < this.creditAverageApproved && j < this.student.level + 2) {
            const courses = this.semester.getCourseBySemester(j);
            courses.forEach((course) => {
                if (!course.approved) {
                    const listPrereq = this.searchPrereq(course.cod);
                    let approved = true;
                    listPrereq.forEach((cod) => {
                        let c = this.semester.getCourseByCod(cod);
                        if (!c.approved) {
                            approved = false;
                        }
                    });
                    if (approved) {
                        if (course.credit === 30 && this.student.level === course.semester) {
                            nextSemester.appendCourse(course);
                            sum = 30;
                        } else {
                            if (this.creditAverageApproved >= (sum + course.credit)) {
                                nextSemester.appendCourse(course);
                                sum += course.credit;
                            }
                        }
                    }
                }
            });
            j++;
        }

        nextSemester.setApproved(true);
        this.student.level = this.setNewLevelStudent(this.semester);
        return nextSemester;
    }

    private setNewLevelStudent(semester: ISemester): number {
        let level = 9999;
        semester.courses.forEach((course) => {
            if (!course.approved && course.semester < level) {
                level = course.semester;
            }
        });
        return level;
    }

    private isSolution(node: INode): boolean {
        return node.h === 0;
    }
}