import { Store } from "./store.dto";
import { User } from "./user.model";

export interface Follow {
    id?:number,
    _user:User,
    store:Store,
}
