import { ISemester } from "./semester.interface";
import { INode } from "./node.interface";

export interface IAlgorithm {
    heuristic(node: INode): number;
    searchPrereq(cod: string): string[];
    returnSolution(current: INode): INode;
    executeAlgorithm(open_nodes: INode[], close_nodes: INode[]): INode;
    run(asignatures: ISemester, i: number): INode;
}