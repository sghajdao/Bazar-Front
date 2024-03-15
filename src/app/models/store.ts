import { User } from "./user"

export interface Store {
    id?:number
    image: string,
    name: string,
    subtitle: string,
    email: string,
    country: string,
    phone: string
    seller?: User,
}
