import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  products:Product[] = []
  userId?:number

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.userId = data['id']
      this.productService.getUserProducts(data['id']).subscribe(prods=>{
        console.log(prods);
        
        this.products = prods
      })
    })
  }
}
