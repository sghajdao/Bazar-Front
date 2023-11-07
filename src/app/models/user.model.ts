import { Store } from "./store.dto"

export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string
    store?: Store
}

export interface UserLite {
    firstname:string,
    lastname:string,
    email:string
}