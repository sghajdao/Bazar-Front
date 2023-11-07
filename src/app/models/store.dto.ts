import { Product } from "./product.dto"
import { User } from "./user.model"

export interface Store {
    image: string,
    name: string,
    subtitle: string,
    email: string,
    country: string,
    phone: string
    seller?: User,
    product?: Product[]
}
