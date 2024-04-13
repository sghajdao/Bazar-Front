import { Store } from "./store";
import { User } from "./user";

export interface Star {
    id?: number,
    user: User,
    store: Store,
}
