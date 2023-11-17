import { Follow } from "./follow.dto"
import { Store } from "./store.dto"

export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string
    role: any,
    store?: Store,
    followers?:Follow[],
}

export interface UserLite {
    firstname:string,
    lastname:string,
    email:string
}
