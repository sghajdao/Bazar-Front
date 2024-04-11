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
    private dialog: MatDialog,
    private router: Router,
  ) {}

  seller?: User
  myStore: boolean = false
  follow?: boolean

  subscriptions: Subscription[] = []
  
  ngOnInit(): void {
    const sub = this.route.params.pipe(mergeMap(param=> this.getSeller(+param['id']))).subscribe({
      next: user=> {
        this.seller = user
        if (this.authService.isAuthenticated() &&
          localStorage.getItem('userId') && user.id === +localStorage.getItem('userId')!)
          this.myStore = true
      },
      error: () => this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
  }

  getSeller(id: number) {
    return this.storeService.getSellerByStoreId(id);
  }

  openDialog() {
    this.dialog.open(StoreInfoComponent, {
      data: this.seller?.store
    });
  }

  followStore() {
    const email = this.userService.getEmail()
    if (!this.myStore && this.seller && email && this.authService.isAuthenticated()) {
      const request: FollowRequest = {
        userEmail: email,
        storeId: this.seller.store?.id!
      }
      this.followService.followStore(request).subscribe({
        next: data => {
          console.log(data)
          this.follow = data
        },
        error: () => this.follow = false
      })
    }
    else if (!email || !this.authService.isAuthenticated())
        this.router.navigateByUrl('/auth/login')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
