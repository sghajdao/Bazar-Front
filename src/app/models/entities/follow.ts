import { Store } from "./store";
import { User } from "./user";

export interface Follow {
    id?: number,
    follower: User,
    followed: Store
}
