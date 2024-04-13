import { Follow } from "./follow"
import { Product } from "./product"
import { Star } from "./star"
import { User } from "./user"

export interface Store {
    id?:number,
    createdAt: Date,
    image: string,
    name: string,
    subtitle: string,
    email: string,
    country: string,
    phone: string
    seller?: User,
    products?: Product[],
    followers?: Follow[],
    stars?: Star[],
}
