import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Output() productToEdit = new EventEmitter<Product>()
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService,
  ) {}

  products:Product[] = []
  store?:Store
  userId?:number
  userEmail?:string;

  ngOnInit(): void {
    this.userEmail = this.userService.getLogedInUser();
    this.activateRoute.params.subscribe(data=>{
      this.userId = data['id']
      this.userEmail = this.userService.getLogedInUser();
      this.userService.getUserByEmail(this.userEmail!).subscribe({
        next: user=> {
          this.products = user.user.store?.product!
          this.store = user.user.store
        }
      })
    })
  }

  editProduct(product:Product) {
    this.productToEdit.emit(product);
  }

  deleteProduct(product:Product) {
    if (product.id) {
      this.productService.deleteProduct(product.id).pipe(
        mergeMap(data=> this.userService.getUserByEmail(this.userEmail!))
      ).subscribe( {
        next: user=> {
          this.products = user.user.store?.product!
          this.store = user.user.store
        }
      })
    }
  }
}
