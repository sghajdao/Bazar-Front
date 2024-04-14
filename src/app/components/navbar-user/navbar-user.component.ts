import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/entities/user';
import { AuthService } from 'src/app/services/auth.service';
import { KeywordService } from 'src/app/services/keyword.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private keywordService: KeywordService,
  ) {}

  user?: User
  authenticated: boolean = false
  search: string = ''
  keywords: string[] = []

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    this.authenticated = this.authService.isAuthenticated()
    this.authService.sessionsExpired()
    const email = this.userService.getEmail()
    if (email) {
      const sub = this.userService.getUserByEmail(email).subscribe({
        next: user=> {
          if (user.store)
            this.user = user
        },
        error: () => {
          localStorage.clear()
          this.router.navigateByUrl('/auth/login')
        }
      })
      this.subscriptions.push(sub)
    }
    // else
    //   this.router.navigateByUrl('/auth/login')
  }

  searchProducts() {
    if (this.search) {
      const sub = this.keywordService.querySearch(this.search).subscribe({
        next: data => {
          this.keywords = []
          data.forEach(keyword => this.keywords.push(keyword.word))
        }
      })
      this.subscriptions.push(sub)
    }
    else {
      this.keywords = []
    }
  }

  onSearch() {
    if (this.search)
      this.router.navigateByUrl('/products-search/' + this.search);
  }

  onLogOut() {
    localStorage.removeItem("token")
    this.router.navigateByUrl('/auth/login')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
