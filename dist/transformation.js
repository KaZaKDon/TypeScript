"use strict";
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = '333';
let d = parseInt(c);
/*const user: User = {
  name: 'Vasia',
  email: 'Vasia@maik.ru',
  login: 'Vasia1'
}*/
const user2 = {
    name: 'Vasia',
    email: 'Vasia@maik.ru',
    login: 'Vasia1'
};
/*const admin: Admin = {
  ...user,
  role: 1
}*/
// Функция МАПИНГА
function userToAdmin(user) {
    return {
        name: user2.name,
        role: 1
    };
}
