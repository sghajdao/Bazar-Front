import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Follow } from 'src/app/models/follow.dto';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { User } from 'src/app/models/user.model';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-visited-store',
  templateUrl: './visited-store.component.html',
  styleUrls: ['./visited-store.component.css']
})
export class VisitedStoreComponent implements OnInit, OnDestroy, OnChanges {

  @Input() user?:User

  constructor(
    private followService: FollowService,
    private userService: UserService,
  ) {}

  store?: Store
  products: Product[] = []
  me?:User

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()
    this.userService.getUserByEmail(email).subscribe(data=> this.me = data.user)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store = this.user?.store
    if (this.user?.store?.product)
      this.products = this.user?.store?.product
  }

  followStore() {
    if (this.store && this.me) {
      const follow: Follow = {
        store: this.store,
        user: this.me
      }
      this.followService.followStore(follow).subscribe(data=> console.log(data))
    }
  }

  ngOnDestroy(): void {
    
  }
}
