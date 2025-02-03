let a = 5;
let b: string = a.toString();

let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c ='333'
let d: number = parseInt(c)

interface User {
  name: string;
  email: string;
  login: string
}

/*const user: User = {
  name: 'Vasia',
  email: 'Vasia@maik.ru',
  login: 'Vasia1'
}*/

const user2 = {
  name: 'Vasia',
  email: 'Vasia@maik.ru',
  login: 'Vasia1'
} as User

interface Admin {
  name: string;
  role: number;
}

/*const admin: Admin = {
  ...user,
  role: 1
}*/

// Функция МАПИНГА
function userToAdmin(user: User): Admin {
  return {
    name: user2.name,
    role: 1
  }
}