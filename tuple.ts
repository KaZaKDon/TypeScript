const point: [number, number, number] = [1, 2, 3];

console.log(point); 

function volume([weight, height, depth]: [number, number, number]): number {
  return weight * height * depth
}

console.log(volume([1,2,3]))

type Person = [string, number, boolean?]// bolean необязателен

const person: Person = ['Alex', 25, true]
const person1: Person = ['Alex', 25]

class PersonAl {

  public publicField: unknown;
  private privateField: unknown;
  protected protectedField: unknown;


  constructor(public readonly name: string) {

    this.publicField
    this.privateField
    this.protectedField
  }

  static isPersonAl(object: unknown): object is PersonAl {
    return object instanceof PersonAl;
  }
  description(): string {
    return `Меня звать ${this.name}`
  }
}

class Student extends PersonAl {
  constructor(name: string, public readonly program: string) {
    super(name)
    this.publicField
    this.privateField
    this.protectedField
  }

  static isStudent(object: unknown): object is Student {
    return object instanceof Student;
  }

  override description(): string {
    const text = super.description()

    return `${text} Я учусь на ${this.program}`
  }
}

const personAl: PersonAl = new PersonAl('Dmitriy')
const student : Student = new Student('Kira', 'TypeScript')

student.publicField
student.privateField
student.protectedField
if(PersonAl.isPersonAl(personAl)) {
  console.log(personAl.name)

}

function processOblect(object: object): void {
  if(PersonAl.isPersonAl(object)) {
  console.log(object.name)
  }

   if(Student.isStudent(object)) {
  console.log(object.name, object.program)
  }
}

processOblect(student)
processOblect(personAl)
console.log(personAl.description())
console.log(student.description())