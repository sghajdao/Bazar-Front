import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  createProduct(product: Product) {
    if (!this.authService.isAuthenticated())
      return new Observable<Product>()
    return this.http.post<Product>(environment.urlRequest + 'product/create', product, this.getHeaders())
  }

  deleteProduct(id: number) {
    if (!this.authService.isAuthenticated())
      return new Observable<Boolean>()
    return this.http.delete<boolean>(environment.urlRequest + 'product/delete/' + id, this.getHeaders())
  }

  getById(id: number) {
    if (!this.authService.isAuthenticated())
      return new Observable<Product>()
    return this.http.get<Product>(environment.urlRequest + 'product/get/' + id);
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
