import { Injectable } from '@nestjs/common';
import { PrerequisiteService } from 'src/prerequisite/prerequisite.service';
import { StudentRequest } from './dto/student-request.dto';
import { StudentService } from 'src/student/student.service';
import { IPreRequisite } from 'src/algorithm/utils/prerequisite.interface';
import { RunAlgorithmService } from 'src/services/run-algorithm.service';
import { Algorithm } from './utils/algorithm.class';
import { StudyPlain } from 'src/utils/study-plain';

@Injectable()
export class AlgorithmService {
    constructor(
        private prerequisiteService: PrerequisiteService,
        private studentService: StudentService,
        private runAlgorithmService: RunAlgorithmService
    ) { }

    async runAlgorithm(studentRequest: StudentRequest) {
        const { rut, useAverage } = studentRequest;
        const infoStudent = await this.studentService.findByRut(rut);
        const student: IStudent = await this.getStudent(rut);
        const { rut_person, cod_plain } = infoStudent;
        const prerequisites = await this.prerequisiteService.searchPrereq(cod_plain);
        const level = await this.studentService.getLevel(rut_person, cod_plain);
        const creditAverageApproved = await this.runAlgorithmService.getCreditAverageApproved(rut, useAverage);
        return await this.run(student, prerequisites, level, creditAverageApproved);
    }

    private async run(student: IStudent, prerequisites: IPreRequisite[], level: number, creditAverageApproved: number) {
        const semester = await this.runAlgorithmService.coursesToSemester(student.rut, student.cod_plain);
        const semesterAux = await this.runAlgorithmService.coursesToSemester(student.rut, student.cod_plain);
        const algorithm = new Algorithm(student, prerequisites, level, semester, creditAverageApproved);
        let aux = level;
        let i = 0;
        let asignatures = this.runAlgorithmService.appendInitialCourses(semester, level);
        const studyPlain = new StudyPlain();
        while (!studyPlain.existCapstoneProject()) {
            asignatures = algorithm.run(asignatures);
            this.runAlgorithmService.setCoursesApproved(semesterAux, asignatures);
            algorithm.semester = this.runAlgorithmService.updateSemester(semesterAux);
            asignatures.semester = aux;
            studyPlain.appendSemester(asignatures);
            student.level = this.runAlgorithmService.setNewLevelStudent(semesterAux);
            aux++;
            i++;
        }
        return studyPlain;
    }

    private async getStudent(rut: string): Promise<IStudent> {
        const infoStudent = await this.studentService.findByRut(rut);
        const { rut_person, cod_plain, year } = infoStudent;
        return { rut: rut_person, cod_plain: cod_plain, year: year };
    }

}
