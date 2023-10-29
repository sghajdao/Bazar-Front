export interface Product {
    title:string,
    description:string,
    images:string[],
    price:number,
    amount:number,
    category:Category,
    brand:Brand,
    collection:Collection,
    tags:string[],
    visibility:string,
    publishDate:Date
}

export enum Category {

}

export enum Brand {

}

export enum Collection {

}