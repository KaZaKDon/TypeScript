"use strict";
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Vasia');
console.log(user);
user.name = 'Petia';
console.log(user);
