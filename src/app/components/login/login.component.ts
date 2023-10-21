import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private googleService: SocialAuthService,
    private userService: UserService,
    ) {}

  subsciptions: Subscription[] = []

  user?: SocialUser;
  loggedIn?: boolean;
  error:boolean = false

  ngOnInit(): void {
    const sub:Subscription = this.googleService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      localStorage.setItem("token", user.idToken)
      const Http = new XMLHttpRequest();
      Http.open("POST", "http://localhost:8080/api/v1/auth/googleLogin");
      Http.send(user.idToken);
      Http.onreadystatechange = function () {
        if (Http.responseText === "true")
          window.location.href = "/profile";
      }
    });
    this.subsciptions.push(sub);
  }

  userData = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  validators: {email:boolean, password:boolean} = {
    email: false,
    password: false
  }

  onSignIn() {
    this.validators = {
      email: this.userData.get('email')!.invalid,
      password: this.userData.get('password')!.invalid
    }

    if (!this.validators.email && !this.validators.password) {      
      const user:any = this.userData.value
      const sub:Subscription = this.authService.loginUser(user).subscribe(data=> {
        if (data.message === "Login Success") {
          localStorage.setItem("token", data.token);
          this.router.navigateByUrl('/profile')
        }
      },
      err=> {
        this.error = true
      })
      this.subsciptions.push(sub);
    }
  }

  onSignUp() {
    this.router.navigateByUrl('/register').then(() => {
      window.location.reload();
    });
  }

  ngOnDestroy(): void {
    this.subsciptions.forEach(sub=> sub.unsubscribe())
  }
}
