import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { User } from 'src/app/models/user.model';
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
    private router: Router
  ) {
  }

  subscription: Subscription[] = []

  user?: User
  email?: string
  myStore:boolean = true
  productToEdit?: Product
  edit: boolean = false

  ngOnInit(): void {
    this.email = this.userService.getLogedInUser()
    this.activateRoute.params.pipe(
      mergeMap(res=> this.userService.getUserById(+res['id']))
    ).subscribe({
      next: data=> {
      this.user = data;
      if (data.email !== this.email)
        // console.log("SAAD")
        this.myStore = false
      },
      error: ()=> {
        this.router.navigateByUrl('/not-found')
      }
    },)
  }

  editProduct(product:Product) {
    this.productToEdit = product;
    this.edit = true
  }

  productEdited(edited:boolean) {
    this.edit = edited
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
function next(value: User): void {
  throw new Error('Function not implemented.');
}

