import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  @Output() back = new EventEmitter<boolean>(false)

  constructor(
    private followService: FollowService,
    private userService: UserService,
    private router: Router,
  ) {}

  store?: Store
  products: Product[] = []
  me?:User
  followed:boolean = false
  subscriptions: Subscription[] = []

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const email = this.userService.getLogedInUser()
    const sub: Subscription = this.userService.getUserByEmail(email).subscribe({
      next: data=> {
        this.me = data
        this.store = this.user?.store
        if (this.user?.store?.product)
          this.products = this.user?.store?.product
        this.store?.followers?.forEach(follower=> {
          if (follower._user.id === this.me?.id) {
            this.followed = true
          }
        })
      }
    })
    this.subscriptions.push(sub)
  }

  followStore() {
    if (this.user && this.me) {
      let follow: FollowRequest = {
        me: this.me.id,
        followed: this.user.id,
      }
      const sub:Subscription = this.followService.followStore(follow).subscribe({
        next: data=> {
          this.followed = true
          this.store?.followers?.push(data)
        }
      })
      this.subscriptions.push(sub)
    }
  }

  unfollowStore() {
    let followId;
    this.store?.followers?.forEach(follower=> {
      if (follower._user.id === this.me?.id) {
        followId = follower.id
      }
    })
    if (followId) {
      const sub: Subscription = this.followService.deleteFollow(followId).subscribe(()=> this.followed = false)
      this.subscriptions.push(sub)
    }
  }

  backToMyStore() {
    this.back.emit(true)
    this.router.navigateByUrl('/store/' + this.me?.id)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
