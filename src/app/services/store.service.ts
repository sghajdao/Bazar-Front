import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../models/store';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  createStore(store: Store, sellerEmail: string) {
    const request = {store, sellerEmail}
    if (!this.authService.isAuthenticated())
      return new Observable<Store>()
    return this.http.post<Store>(environment.urlRequest + 'store/create', request, this.getHeaders())
  }

  getSellerByStoreId(id: number) {
    return this.http.get<User>(environment.urlRequest + 'store/seller/' + id);
  }

  updateStore(store: Store) {
    if (!this.authService.isAuthenticated())
      return new Observable<Store>()
    return this.http.put<Store>(environment.urlRequest + 'store/update', store, this.getHeaders());
  }

  getStoreById(id: number) {
    if (!this.authService.isAuthenticated())
      return new Observable<Store>()
    return this.http.get<Store>(environment.urlRequest + 'store/' + id, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
