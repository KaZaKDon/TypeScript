interface User {
    name: string;
    email: string;
    login: string;
}
declare const user1: User;
interface Admin {
    name: string;
    role: number;
}
declare function logId(id: string | number): void;
declare function isString(x: string | number): x is string;
declare function isAdmin(user1: User | Admin): user1 is Admin;
declare function isAdminAlternative(user1: User | Admin): user1 is Admin;
declare function setRole(user1: User | Admin): void;
