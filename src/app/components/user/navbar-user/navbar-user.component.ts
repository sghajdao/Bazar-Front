import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit{

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  user?: User
  authenticated: boolean = false

  ngOnInit(): void {
    this.authenticated = this.authService.isAuthenticated()
    this.authService.sessionsExpired()
    const email = this.userService.getEmail()
    if (email) {
      this.userService.getUserByEmail(email).subscribe({
        next: user=> {
          if (user.store)
            this.user = user
        }
      })
    }
    else
      this.router.navigateByUrl('/auth/login')
  }

  onLogOut() {
    localStorage.removeItem("token")
    this.router.navigateByUrl('/auth/login')
  }
}
