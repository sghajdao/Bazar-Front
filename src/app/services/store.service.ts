import { Injectable } from '@angular/core';
import { Store } from '../models/store.dto';
import { HttpClient } from '@angular/common/http';
import { NewStoreResponse } from '../models/newStoreResponse';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  newStore(store:Store, email:string) {
    const data:{store:Store, sellerEmail:string} = {store:store, sellerEmail:email}
    return this.http.post<NewStoreResponse>(environment.urlRequest + 'api/store/new', data, this.getHeaders());
  }

  getStoreByUserEmail() {
    const userEmail = this.userService.getLogedInUser();
    return this.http.post<Store>(environment.urlRequest + 'api/store/get/selleremail', userEmail);
  }

  getStoreById(id:number) {
    return this.http.get<Store>(environment.urlRequest + 'api/store/get/' + id)
  }

  updateStore(store: Store) {
    return this.http.put<Store>(environment.urlRequest + 'api/store/update', store, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
