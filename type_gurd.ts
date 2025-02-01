interface User {
  name: string;
  email: string;
  login: string
}

const user1 = {
  name: 'Vasia',
  email: 'Vasia@maik.ru',
  login: 'Vasia1'
} as User

interface Admin {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if(isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isString(x: string | number): x is string {
  return typeof x === 'string'
}

function isAdmin(user1: User | Admin): user1 is Admin {
  return 'role' in user1;
}

function isAdminAlternative (user1: User | Admin): user1 is Admin {
  return (user1 as Admin).role !== undefined;
}

function setRole(user1: User | Admin) {
  if(isAdmin(user1)) {
    user1.role = 0;
  } else {
    throw new Error('Пользовательне админ')
  }
}