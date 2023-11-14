import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { UserLite } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  subsription: Subscription[] = []

  loggedInUser?:UserLite;

  ngOnInit(): void {
    const email = this.userService.getLogedInUser();
    const sub:Subscription = this.userService.getUserByEmail(email).subscribe({
      next: user=> this.loggedInUser = user.user
    })
  }

  ngOnDestroy(): void {
    this.subsription.forEach(sub=> sub.unsubscribe())
  }
}
