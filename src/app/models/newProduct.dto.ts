import { Product } from "./product.dto";

export interface NewProduct {
    product: Product,
    keywords: string[],
    storeEmail: string
}
