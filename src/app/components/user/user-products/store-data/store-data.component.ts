import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FollowRequest } from 'src/app/models/followRequest.dto';
import { Store } from 'src/app/models/store.dto';
import { User } from 'src/app/models/user.model';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent implements OnInit, OnChanges {

  @Input() store?:Store
  @Input() seller?: User
  @Input() me?:User

  constructor(
    private userService: UserService,
    private router: Router,
    private followService: FollowService,
  ) {}

  subscription: Subscription[] = []

  followed: boolean = false

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store?.followers?.forEach(follower=> {
      if (follower._user.id === this.me?.id)
        this.followed = true
    })
  }

  storeSettings() {
    this.router.navigateByUrl('/settings/store')
  }

  followStore() {
    if (this.seller && this.me) {
      let follow: FollowRequest = {
        me: this.me.id,
        followed: this.seller.id,
      }
      const sub:Subscription = this.followService.followStore(follow).subscribe({
        next: data=> {
          this.followed = true
          this.store?.followers?.push(data)
        }
      })
      this.subscription.push(sub)
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
      this.subscription.push(sub)
    }
  }
}
