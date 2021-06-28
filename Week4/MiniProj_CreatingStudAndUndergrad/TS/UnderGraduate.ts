import { Student } from "./Student";
import { IunderGrad } from "./IunderGrad";

export class UnderGraduate extends Student implements IunderGrad{
    batch: number;
    GPA: number;

    constructor(name: string, age: number, nationality: string, batch: number, GPA: number) {
        super(name, age, nationality);
        this.batch = batch;
        this.GPA = GPA;
    }


    
}