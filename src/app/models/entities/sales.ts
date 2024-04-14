import { Product } from "./product";
import { Store } from "./store";

export interface Sales {
    id?: number,
    soldAt: Date,
    product: Product,
    store: Store,
}
