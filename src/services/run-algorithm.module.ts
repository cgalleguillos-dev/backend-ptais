import { Module } from "@nestjs/common";
import { RunAlgorithmService } from "./run-algorithm.service";
import { StudentModule } from "src/student/student.module";
import { CourseModule } from "src/course/course.module";

@Module({
    imports: [StudentModule, CourseModule],
    controllers: [],
    providers: [RunAlgorithmService],
    exports: [RunAlgorithmService]
})
export class RunAlgorithmModule { }