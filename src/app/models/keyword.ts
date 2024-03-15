import { Product } from "./product";

export interface Keyword {
    id?: number,
    word: string,
    product?: Product
}
