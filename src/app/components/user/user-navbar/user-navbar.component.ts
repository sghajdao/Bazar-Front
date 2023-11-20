import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { UserLite } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private userService:UserService,
    private productService: ProductService,
  ) {}

  subscription: Subscription[] = []

  loggedInUser?:UserLite;
  storeExist:boolean = false
  userId?:number

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()
    const sub:Subscription = this.userService.getUserByEmail(email).subscribe({
      next: user=> {
        this.loggedInUser = user;
        this.userId = user.id
        if (!user.store)
          this.storeExist = true
      }
    });
    this.subscription.push(sub)
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchQueryConvers() {
    if (this.myControl.value) {
      const sub: Subscription = this.productService.searchQuery(this.myControl.value).subscribe(products=> {
        this.options = []
        products.forEach(product=> {
          if (product.title)
            this.options.push(product.title)
        })

        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      })
      this.subscription.push(sub)
    }
  }

  search() {
    if (this.myControl.value)
      this.router.navigateByUrl('/products/search/' + this.myControl.value)
  }

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
