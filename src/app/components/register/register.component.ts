import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy{

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private authService: AuthService,
    private googleService: SocialAuthService,
    private userService: UserService,
    ) {
    }

  subsciptions: Subscription[] = []

  userData = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  validators: {firstname:boolean, lastname:boolean, email:boolean, password:boolean} = {
    firstname: false,
    lastname: false,
    email: false,
    password: false
  }

  user?: SocialUser;
  loggedIn?: boolean;

  ngOnInit(): void {
    const sub:Subscription = this.googleService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      localStorage.setItem("token", user.idToken)
      const Http = new XMLHttpRequest();
      Http.open("POST", "http://localhost:8080/api/v1/auth/google");
      Http.send(user.idToken);

      Http.onload = function () {
        window.location.href = "/profile";
      }
    });
    this.subsciptions.push(sub);
  }

  onSignUp() {
    this.validators = {
      firstname: this.userData.get('firstname')!.invalid,
      lastname: this.userData.get('lastname')!.invalid,
      email: this.userData.get('email')!.invalid,
      password: this.userData.get('password')!.invalid
    }
    
    if (!this.validators.firstname && !this.validators.lastname &&
        !this.validators.email && !this.validators.password) {
          let user:any = this.userData.value
          const sub:Subscription = this.authService.registerUser(user).subscribe(data=> {
            if (data) {
              if (data.message === "Already exist") {
                this.router.navigateByUrl('/login')
                return;
              }
              localStorage.setItem("token", data.token);
              this.router.navigateByUrl('/profile')
            }
          })
          this.subsciptions.push(sub);
      }
  }

  onSignIn() {
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }

  ngOnDestroy(): void {
    this.subsciptions.forEach(sub=> sub.unsubscribe())
  }
}
