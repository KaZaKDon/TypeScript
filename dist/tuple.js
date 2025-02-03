"use strict";
const point = [1, 2, 3];
console.log(point);
function volume([weight, height, depth]) {
    return weight * height * depth;
}
console.log(volume([1, 2, 3]));
const person = ['Alex', 25, true];
const person1 = ['Alex', 25];
class PersonAl {
    name;
    publicField;
    privateField;
    protectedField;
    constructor(name) {
        this.name = name;
        this.publicField;
        this.privateField;
        this.protectedField;
    }
    static isPersonAl(object) {
        return object instanceof PersonAl;
    }
    description() {
        return `Меня звать ${this.name}`;
    }
}
class Student extends PersonAl {
    program;
    constructor(name, program) {
        super(name);
        this.program = program;
        this.publicField;
        this.privateField;
        this.protectedField;
    }
    static isStudent(object) {
        return object instanceof Student;
    }
    description() {
        const text = super.description();
        return `${text} Я учусь на ${this.program}`;
    }
}
const personAl = new PersonAl('Dmitriy');
const student = new Student('Kira', 'TypeScript');
student.publicField;
student.privateField;
student.protectedField;
if (PersonAl.isPersonAl(personAl)) {
    console.log(personAl.name);
}
function processOblect(object) {
    if (PersonAl.isPersonAl(object)) {
        console.log(object.name);
    }
    if (Student.isStudent(object)) {
        console.log(object.name, object.program);
    }
}
processOblect(student);
processOblect(personAl);
console.log(personAl.description());
console.log(student.description());
