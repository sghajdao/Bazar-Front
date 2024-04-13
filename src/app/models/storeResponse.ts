import { Store } from "./store";
import { User } from "./user";

export interface StoreResponse {
    store: Store,
    seller: User,
    follower: boolean,
    rater: boolean,
}
