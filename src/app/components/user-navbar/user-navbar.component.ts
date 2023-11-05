import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
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
    private userService:UserService
  ) {}

  subscription: Subscription[] = []

  loggedInUser?:UserLite;
  userId?:number

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const data:any = jwtDecode(token)
      if (data && data.iss === "https://accounts.google.com") {
        this.loggedInUser = {firstname: data.given_name, lastname: data.family_name, email: data.mail}
        const sub:Subscription = this.userService.getUserByEmail(data.email).subscribe(user=> {
          this.userId = user.id
        });
        this.subscription.push(sub)
      }
      else {
        const sub:Subscription = this.userService.getUserByEmail(data.sub).subscribe(user=> {
          this.loggedInUser = user
          this.userId = user.id
        });
        this.subscription.push(sub)
      }
    }
  }

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
