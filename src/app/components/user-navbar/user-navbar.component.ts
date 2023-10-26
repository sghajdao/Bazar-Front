import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { UserLite } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService:UserService
  ) {}

  loggedInUser?:UserLite;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const data:any = jwtDecode(token)
      if (data && data.iss === "https://accounts.google.com")
        this.loggedInUser = {firstname: data.given_name, lastname: data.family_name, email: data.mail}
      else
        this.userService.getUserByEmail(data.sub).subscribe(user=> this.loggedInUser = user);
    }
  }

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }
}
