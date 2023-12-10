import { Injectable } from '@angular/core';
import { Product } from '../models/product.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductResponseDto } from '../models/productRsponse.dto';
import { User } from '../models/user.model';
import { Keywords } from '../models/keywords.dto';
import { NewProduct } from '../models/newProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient,
  ) { }

  newProduct(product:NewProduct) {
    // const data:{product:Product, storeEmail:string} = {product:product, storeEmail:email}
    return this.http.post<Product>(environment.urlRequest + "api/product/new", product, this.getHeaders());
  }

  getUserProducts(id:number) {
    return this.http.get<Product[]>(environment.urlRequest + "api/product/store/" + id, this.getHeaders());
  }

  getSellerByProdId(id:number) {
    return this.http.get<User>(environment.urlRequest + 'api/product/' + id, this.getHeaders())
  }

  searchQuery(keyword:Keywords) {
    return this.http.post<ProductResponseDto[]>(environment.urlRequest + 'api/product/search' , keyword)
  }

  updateProduct(product:Product) {
    return this.http.put<Product>(environment.urlRequest + 'api/product/update', product, this.getHeaders());
  }

  deleteProduct(id:number) {
    return this.http.delete<boolean>(environment.urlRequest + 'api/product/delete/' + id, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
