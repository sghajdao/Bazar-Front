import { Keyword } from "./keyword";
import { Store } from "./store";

export interface Product {
    id?:number,
    createdAt:Date
    title:string,
    description:string,
    images?:(string | ArrayBuffer)[],
    price:number,
    stock:number,
    category:string,
    brand:string,
    collections:string[],
    keywords?:Keyword[],
    visibility:string,
    pushDate?:Date,
    visitors?:number,
    sales?:number,
    store?:Store,
    store2?:Store,
}

export enum Category {
    DIGITAL = "digital services",
    COSMITICS = "cosmetics and body care",
    FOOD = "food and beverage",
    FURNITURE = "furniture and decor",
    HEALTH = "health and wellness",
    HOUSEHOLD = "household items",
    MEDIA = "media",
    PET = "pet care",
    OFFICE = "office equipment",
}

export enum Collection {
    SPRING = "spring",
    SUMMER = "summer",
    AUTUMN = "autumn",
    WINTER = "winter",
    MALE = "male",
    FEMALE = "female",
    ADULTS = "adults",
    KIDS = "kids"
}
