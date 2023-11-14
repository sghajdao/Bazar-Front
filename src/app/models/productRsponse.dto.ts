import { Product } from "./product.dto";
import { Store } from "./store.dto";

export interface ProductResponseDto {
    product: Product
    store: Store
}
