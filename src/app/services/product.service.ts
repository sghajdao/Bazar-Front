import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response';

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
    return this.http.get<ProductResponse>(environment.urlRequest + 'product/get/' + id);
  }

  updateProduct(product: Product) {
    if (!this.authService.isAuthenticated())
      return new Observable<ProductResponse>()
    return this.http.put<ProductResponse>(environment.urlRequest + 'product/update', product, this.getHeaders());
  }

  getCategory(category: string) {
    return this.http.get<Product[]>(environment.urlRequest + 'product/category/' + category);
  }

  getByKeyword(word: string) {
    return this.http.get<Product[]>(environment.urlRequest + 'product/search/' + word);
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
