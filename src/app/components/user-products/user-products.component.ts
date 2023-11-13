import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
  ) {
  }

  products:Product[] = []
  store?:Store
  userId?:number

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.userId = data['id']
      const email = this.userService.getLogedInUser();
      this.userService.getUserByEmail(email).subscribe({
        next: user=> {
          this.products = user.user.store?.product!
          this.store = user.user.store
        }
      })
    })
  }
}
