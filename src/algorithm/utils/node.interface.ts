import { ISemester } from "./semester.interface";

export interface INode {
    semester: ISemester;
    next: INode | null;
    g: number;
    h: number;
    f: number;

    setNext(node: INode): void;
}