export class Student {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }

    getNationality(): string {
        return this.nationality;
    }
}
