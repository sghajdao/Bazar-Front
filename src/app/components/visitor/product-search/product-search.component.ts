import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit, OnDestroy {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private userService: UserService,
  ) {}

  subscriptions: Subscription[] = []

  products: Product[] = []
  isUser:boolean = false;
  isVisitor:boolean = false

  ngOnInit(): void {
    const sub: Subscription = this.activateRoute.params.pipe(
      mergeMap(res=> this.productService.searchQuery(res['title']))
    ).subscribe({
      next: data=> {
        if (data[0]) {
          this.visitorType()
          this.products = data
        }
      },
      error: ()=> this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
  }

  visitorType() {
    const email:string = this.userService.getLogedInUser();
    if (email) {
      const sub: Subscription = this.userService.getUserByEmail(email).subscribe({
        next: data=>{
          if (data)
            this.isUser = true
          else
            this.isVisitor = true
        },
        error: ()=> this.router.navigateByUrl('/login')
      })
      this.subscriptions.push(sub)
    }
    else
      this.isVisitor = true
  }

  goToStore(product:Product) {
    if (product.store && product.store.id)
      this.router.navigateByUrl('/store/' + product.store.id)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
