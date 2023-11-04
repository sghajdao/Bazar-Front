export interface Product {
    title:string,
    description:string,
    images?:(string | ArrayBuffer)[],
    price:number,
    stock:number,
    category:Category,
    brand:string,
    collection:Collection,
    keywords?:string[],
    visibility:string,
    pushDate?:Date
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