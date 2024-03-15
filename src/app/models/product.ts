import { Keyword } from "./keyword";
import { Store } from "./store";

export interface Product {
    id?:number,
    title:string,
    description:string,
    images?:(string | ArrayBuffer)[],
    price:number,
    stock:number,
    category:string,
    brand:string,
    collection:string[],
    keywords?:Keyword[],
    visibility:string,
    pushDate?:Date,
    visitors?:number,
    sales?:number,
    store?:Store,
}
