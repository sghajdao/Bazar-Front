import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLite } from 'src/app/models/user.model';
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
  ) {}

  subscription: Subscription[] = []

  loggedInUser?:UserLite;
  storeExist:boolean = false
  userId?:number

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()
    const sub:Subscription = this.userService.getUserByEmail(email).subscribe({
      next: user=> {
        this.loggedInUser = user.user;
        this.userId = user.user.id
        if (!user.user.store)
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
