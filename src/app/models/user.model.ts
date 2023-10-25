export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string
}

export interface UserLite {
    firstname:string,
    lastname:string,
    email:string
}