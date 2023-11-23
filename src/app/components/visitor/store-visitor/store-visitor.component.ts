import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Observable, Subscription, switchMap } from 'rxjs';
import { FollowRequest } from 'src/app/models/followRequest.dto';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { User } from 'src/app/models/user.model';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-visitor',
  templateUrl: './store-visitor.component.html',
  styleUrls: ['./store-visitor.component.css']
})
export class StoreVisitorComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private followService: FollowService
  ) {}

  subscriptions: Subscription[] = []

  store?: Store
  products: Product[] = []
  me?:User
  user?:User
  followed:boolean = false

  ngOnInit(): void {
    const sub: Subscription = this.activateRoute.params.pipe(
      mergeMap(res=> this.getMeAndUser(+res['id']))
    ).subscribe({
      next: data=> {
        this.user = data
        this.store = data.store
        if (data.store?.product)
          this.products = data.store?.product
          data.store?.followers?.forEach(follower=> {
          if (follower._user.id === this.me?.id)
            this.followed = true
        })
      }, error: ()=> this.router.navigateByUrl('/login')
    })
    this.subscriptions.push(sub)
  }

  getMeAndUser(userId: number): Observable<User> {
    return this.userService.getUserByEmail(this.userService.getLogedInUser()).pipe(
      switchMap(meData => {
        this.me = meData;
        return this.userService.getUserById(userId);
      })
    );
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=> sub.unsubscribe())
  }
}
