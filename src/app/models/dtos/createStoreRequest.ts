import { Store } from "../entities/store";

export interface CreateStoreRequest {
    store : Store,
    sellerEmail: string
}
