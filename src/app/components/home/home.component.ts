import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService
    ) {}

  user?: SocialUser;
  loggedIn?: boolean;

  loggedInUser:any;

  ngOnInit(): void {
    // if (this.authService.welcome())
    // this.authService.welcome()?.subscribe(data=> {
    //   this.loggedInUser = data
    // })
  }
}
