import { Store } from "./store";
import { User } from "./user";

export interface StoreResponse {
    store: Store,
    seller: User,
    follower: boolean, // if the user who get the response is a follower of the store
    rater: boolean, // if the user who get the response is a rater of the store
}
