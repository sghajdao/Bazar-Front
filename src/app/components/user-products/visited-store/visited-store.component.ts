import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Follow } from 'src/app/models/follow.dto';
import { FollowRequest } from 'src/app/models/followRequest.dto';
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
  ) {
    const email = this.userService.getLogedInUser()
    this.userService.getUserByEmail(email).subscribe(data=> this.me = data.user)
  }

  store?: Store
  products: Product[] = []
  me?:User
  followed:boolean = false

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store = this.user?.store
    if (this.user?.store?.product)
      this.products = this.user?.store?.product
    if (this.store && this.store?.id) {
      this.followService.getFollowersByStoreId(this.store.id).subscribe({
        next: data=> {
          data.users.forEach(follower=> {
            if (follower.id === this.me?.id)
              this.followed = true
          })
        }
      })
    }
  }

  followStore() {
    if (this.user && this.me) {
      let follow: FollowRequest = {
        me: this.me.id,
        followed: this.user.id,
      }
      this.followService.followStore(follow).subscribe({
        next: data=> {
          this.followed = true
          console.log(data)
        }
      })
    }
  }

  ngOnDestroy(): void {
    
  }
}
