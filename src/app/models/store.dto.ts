import { Follow } from "./follow.dto"
import { Product } from "./product.dto"
import { User } from "./user.model"

export interface Store {
    id?:number
    image: string,
    name: string,
    subtitle: string,
    email: string,
    country: string,
    phone: string
    seller?: User,
    product?: Product[],
    followers?:Follow[]
}
