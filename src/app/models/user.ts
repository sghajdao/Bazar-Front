import { Follow } from "./follow";
import { Star } from "./star";
import { Store } from "./store";

export interface User {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    password:string
    verifiedEmail: boolean,
    role: any,
    store?: Store,
    follows?: Follow[],
    raters?: Star[],
}
