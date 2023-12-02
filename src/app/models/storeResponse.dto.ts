import { Store } from "./store.dto";
import { User } from "./user.model";

export interface StoreResponse {
    store: Store,
    seller: User
}
