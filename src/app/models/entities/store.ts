import { Follow } from "./follow"
import { Product } from "./product"
import { Sales } from "./sales"
import { Star } from "./star"
import { User } from "./user"

export interface Store {
    id?:number,
    createdAt: Date,
    image: string,
    name: string,
    subtitle: string,
    email: string,
    verified: boolean,
    country: string,
    phone: string
    seller?: User,
    products?: Product[],
    sales?: Product[],
    followers?: Follow[],
    stars?: Star[],
    solds?: Sales[],
}
