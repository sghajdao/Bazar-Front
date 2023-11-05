import { Injectable } from '@angular/core';
import { Product } from '../models/product.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient,
  ) { }

  newProduct(product:Product, email:string) {
    const data:{product:Product, email:string} = {product, email}
    return this.http.post<Product>(environment.urlRequest + "api/product/new", data, this.getHeaders());
  }

  getUserProducts(id:number) {
    return this.http.get<Product[]>(environment.urlRequest + "api/product/" + id, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
