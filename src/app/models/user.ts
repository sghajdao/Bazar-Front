import { Store } from "./store";

export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string
    role: any,
    store?: Store,
}
