import { Injectable } from '@angular/core';
import { Store } from '../models/store.dto';
import { HttpClient } from '@angular/common/http';
import { NewStoreResponse } from '../models/newStoreResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient,
  ) { }

  newStore(store:Store, email:string) {
    const data:{store:Store, sellerEmail:string} = {store:store, sellerEmail:email}
    return this.http.post<NewStoreResponse>(environment.urlRequest + 'api/store/new', data, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
