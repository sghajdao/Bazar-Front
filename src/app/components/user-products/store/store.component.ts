import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { UserResponse } from 'src/app/models/userResponse.dto';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {

  @Output() productToEdit = new EventEmitter<Product>()
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  subscription: Subscription[] = []

  products:Product[] = []
  store?:Store
  userId?:number
  userEmail?:string;

  ngOnInit(): void {
    this.userEmail = this.userService.getLogedInUser();
    const sub:Subscription = this.activateRoute.params.subscribe(data=>{
      this.userId = data['id']
      this.userEmail = this.userService.getLogedInUser();
      const sub2:Subscription = this.userService.getUserByEmail(this.userEmail!).subscribe({
        next: user=> {
          this.products = user.user.store?.product!
          this.store = user.user.store
        }
      })
      this.subscription.push(sub2)
    })
    this.subscription.push(sub)
  }

  editProduct(product:Product) {
    this.productToEdit.emit(product);
  }

  deleteProduct(product:Product): void {
    const sub:Subscription = this.dialog.open(ConfirmComponent, {
      data: product
    }).afterClosed().pipe(
      mergeMap(data=> this.refreshProducts(data))
    ).subscribe({
      next: user=> {
        if (user && user.user) {
          this.products = user.user.store?.product!
          this.store = user.user.store
        }
      }
    });
    this.subscription.push(sub)
  }

  refreshProducts(confirm:string): Observable<UserResponse> {
    if (confirm === 'Deletion successful') {
      return this.userService.getUserByEmail(this.userEmail!)
    }
    return new Observable()
  }

  openProduct(product:Product) {
    this.router.navigateByUrl('/product/' + product.id)
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
