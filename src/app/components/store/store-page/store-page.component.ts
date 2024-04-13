import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { StoreService } from 'src/app/services/store.service';
import { StoreInfoComponent } from '../../modals/store-info/store-info.component';
import { AuthService } from 'src/app/services/auth.service';
import { Follow } from 'src/app/models/follow';
import { FollowRequest } from 'src/app/models/followRequest';
import { UserService } from 'src/app/services/user.service';
import { FollowService } from 'src/app/services/follow.service';
import { StarService } from 'src/app/services/star.service';
import { StarRequest } from 'src/app/models/starRequest';
import { FollowingAndStarResp } from 'src/app/models/followingAndStarResp';
import { StoreResponse } from 'src/app/models/storeResponse';
import { StoreRequest } from '../../../models/storeRequest';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private authService: AuthService,
    private userService: UserService,
    private followService: FollowService,
    private starService: StarService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  storeResponse?: StoreResponse
  myStore: boolean = false
  response?: FollowingAndStarResp
  userId: number = -1
  followAndStar: boolean[] = [false, false]

  subscriptions: Subscription[] = []
  
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')? +localStorage.getItem('userId')! : -1;
    const sub = this.route.params.pipe(mergeMap(param=> this.getSeller(+param['id']))).subscribe({
      next: response=> {
        this.storeResponse = response
        this.followAndStar = [response.follower, response.rater];
        if (this.authService.isAuthenticated() &&
          localStorage.getItem('userId') && response.seller.id === +localStorage.getItem('userId')!)
          this.myStore = true
      },
      error: () => this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
  }

  getSeller(id: number) {
    const request: StoreRequest = {storeId: id, userId: this.userId}
    return this.storeService.getStoreById(request);
  }

  openDialog() {
    this.dialog.open(StoreInfoComponent, {
      data: this.storeResponse?.store
    });
  }

  followStore() {
    const email = this.userService.getEmail()
    if (!this.myStore && this.storeResponse?.seller && email && this.authService.isAuthenticated()) {
      const request: FollowRequest = {
        userEmail: email,
        storeId: this.storeResponse.store.id!
      }
      const sub = this.followService.followStore(request).subscribe({
        next: data => {
          this.response = data
          this.followAndStar[0] = !this.followAndStar[0]
        }
      })
      this.subscriptions.push(sub)
    }
    else if (!email || !this.authService.isAuthenticated())
      this.router.navigateByUrl('/auth/login')
  }

  unfollowStore() {
    const email = this.userService.getEmail()
    if (!this.myStore && this.storeResponse?.seller && email && this.authService.isAuthenticated()) {
      const sub = this.followService.unfollowStore(this.storeResponse.store.id!, email).subscribe({
        next: data => {
          this.response = data
          this.followAndStar[0] = !this.followAndStar[0]
        }
      })
    }
  }

  rateStore() {
    const email = this.userService.getEmail()
    if (!this.myStore && this.storeResponse?.seller && email && this.authService.isAuthenticated()) {
      const request: StarRequest = {
        userEmail: email,
        storeId: this.storeResponse.store.id!
      }
      const sub = this.starService.rateStore(request).subscribe({
        next: data => {
          this.response = data
          this.followAndStar[1] = !this.followAndStar[1]
        }
      })
      this.subscriptions.push(sub)
    }
    else if (!email || !this.authService.isAuthenticated())
      this.router.navigateByUrl('/auth/login')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
