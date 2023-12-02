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
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy, OnChanges {

  @Output() productToEdit = new EventEmitter<Product>()
  @Input() store?:Store
  @Input() seller?: User
  
  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  subscription: Subscription[] = []

  products:Product[] = []
  myStore: boolean = false

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const email:string = this.userService.getLogedInUser()
    if (this.seller?.email === email)
      this.myStore = true
    if (this.store?.product)
      this.products = this.store.product
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
