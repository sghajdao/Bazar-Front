import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ConfirmComponent } from 'src/app/components/modals/confirm/confirm.component';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent implements OnInit, OnDestroy, OnChanges {

  @Output() productToEdit = new EventEmitter<Product>()
  @Input() user?:User
  
  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  subscription: Subscription[] = []

  products:Product[] = []
  store?:Store

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.store = this.user?.store
    if (this.user?.store?.product)
      this.products = this.user?.store?.product
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
        if (user) {
          this.products = user.store?.product!
          this.store = user.store
        }
      }
    });
    this.subscription.push(sub)
  }

  refreshProducts(confirm:string): Observable<User> {
    if (confirm === 'Deletion successful') {
      const email = this.userService.getLogedInUser()
      return this.userService.getUserByEmail(email)
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
