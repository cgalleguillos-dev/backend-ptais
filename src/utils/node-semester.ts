import { INode } from "src/algorithm/utils/node.interface";
import { ISemester } from "src/algorithm/utils/semester.interface";

export class NodeSemester implements INode {
    semester: ISemester;
    next: INode;
    g: number;
    h: number;
    f: number;

    constructor(semester: ISemester) {
        this.semester = semester;
        this.next = null;
        this.g = 0;
        this.h = -1;
        this.f = 0;
    }

    setNext(node: INode): void {
        this.next = node;
    }

}