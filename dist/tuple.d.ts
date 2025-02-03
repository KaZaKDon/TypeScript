declare const point: [number, number, number];
declare function volume([weight, height, depth]: [number, number, number]): number;
type Person = [string, number, boolean?];
declare const person: Person;
declare const person1: Person;
declare class PersonAl {
    readonly name: string;
    publicField: unknown;
    private privateField;
    protected protectedField: unknown;
    constructor(name: string);
    static isPersonAl(object: unknown): object is PersonAl;
    description(): string;
}
declare class Student extends PersonAl {
    readonly program: string;
    constructor(name: string, program: string);
    static isStudent(object: unknown): object is Student;
    description(): string;
}
declare const personAl: PersonAl;
declare const student: Student;
declare function processOblect(object: object): void;
