"use strict";
const user1 = {
    name: 'Vasia',
    email: 'Vasia@maik.ru',
    login: 'Vasia1'
};
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(user1) {
    return 'role' in user1;
}
function isAdminAlternative(user1) {
    return user1.role !== undefined;
}
function setRole(user1) {
    if (isAdmin(user1)) {
        user1.role = 0;
    }
    else {
        throw new Error('Пользовательне админ');
    }
}
