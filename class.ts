class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(ageOrName?: string | number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'string') {
      this.age = ageOrName;
    }   
  }
}

const user = new User('Vasia');
const user3 = new User();
const user4 = new User(33);
/*console.log(user);
user.name = 'Petia'
console.log(user);

class Admin {
  role: number;
}
const admin = new Admin();
admin.role = 1*/