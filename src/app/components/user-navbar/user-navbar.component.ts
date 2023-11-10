import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/models/store.dto';
import { UserLite } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store.service';
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
    private storeService: StoreService,
  ) {}

  subscription: Subscription[] = []

  loggedInUser?:UserLite;
  storeExist:boolean = false
  userId?:number

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

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
