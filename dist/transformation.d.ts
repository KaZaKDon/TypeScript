declare let a: number;
declare let b: string;
declare let e: string;
declare let f: boolean;
declare let c: string;
declare let d: number;
interface User {
    name: string;
    email: string;
    login: string;
}
declare const user2: User;
interface Admin {
    name: string;
    role: number;
}
declare function userToAdmin(user: User): Admin;
