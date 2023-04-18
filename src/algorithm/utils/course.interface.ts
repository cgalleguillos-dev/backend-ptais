export interface ICourse {
    cod: string;
    name: string;
    credit: number;
    semester: number;
    approved?: boolean;
}