import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { User } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
  ) {
  }

  subscription: Subscription[] = []

  store?: Store
  productToEdit?: Product
  edit: boolean = false
  isUser: boolean = false
  isVisitor: boolean = false

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      // this id is the store id
      mergeMap(res=> this.getStore(+res['id']))
    ).subscribe({
      next: data=> {
        this.store = data;
      },
      error: ()=> {
        this.router.navigateByUrl('/not-found')
      }
    },)
  }

  getStore(id:number) {
    const email:string = this.userService.getLogedInUser()
    email? this.isUser = true : this.isVisitor = true
    return this.storeService.getStoreById(id)
  }

  editProduct(product:Product) {
    this.productToEdit = product;
    this.edit = true
  }

  productEdited(edited:boolean) {
    if (!edited) {
      const sub: Subscription = this.userService.getUserByEmail(this.userService.getLogedInUser()).subscribe(data=> {
        this.store = data.store
        this.edit = edited
      })
      this.subscription.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
