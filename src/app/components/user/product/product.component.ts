import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
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

  product?: Product
  store?: Store
  isUser: boolean = false
  isVisitor: boolean = false
  isOwner?: boolean
  productId?: number

  image: string | ArrayBuffer = ''

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()

    const sub:Subscription = this.activateRoute.params.pipe(
      mergeMap(res1=> this.getSeller(res1['id']))
    ).subscribe({
      next: seller=> {
        (seller.email === email)? this.isOwner = true : this.isOwner = false
        this.isUser = true
        this.product = seller.store?.product?.filter(item => item.id !== this.productId).at(0)
        this.store = seller.store
        if (this.product?.images)
          this.image = this.product.images[0]
      },error: ()=> this.isVisitor = true
    })
    this.subscriptions.push(sub)
  }

  getSeller(id:number) {
    this.productId = id
    return this.productService.getSellerByProdId(id)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
