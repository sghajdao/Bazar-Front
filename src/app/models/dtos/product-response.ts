import { Product } from "../entities/product";
import { Store } from "../entities/store";

export interface ProductResponse {
    product: Product,
    store: Store
}
