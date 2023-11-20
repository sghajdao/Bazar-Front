import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
  ) {}

  subscriptions: Subscription[] = []

  productId?:number
  product?: Product
  store?: Store

  image: string | ArrayBuffer = ''

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()

    const sub:Subscription = this.activateRoute.params.pipe(
      mergeMap(res1=> this.productService.getProductById(res1['id']))
    ).subscribe({
      next: data=> {
        if (!email || email !== data.product.store?.seller?.email) {
          this.router.navigateByUrl('/product/visitor/' + data.product.id)
          return
        }
        this.product = data.product
        this.store = data.product.store
        if (data.product.images)
          this.image = data.product.images[0]
      }
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
