import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) {}

  productId?:number
  product?: Product
  store?: Store

  pushDate: any

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      mergeMap(res1=> this.productService.getProductById(res1['id']))
    ).subscribe({
      next: data=> {
        this.product = data.product
        this.store = data.store
        this.pushDate = this.getPushDate(this.product.pushDate!)
      }
    })
  }

  getPushDate(pushdate:Date) {
    const date = new Date(pushdate)
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return formattedDate
  }
}
