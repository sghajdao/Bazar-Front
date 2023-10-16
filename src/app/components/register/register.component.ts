import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.dto';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private authService: AuthService,
    private googleService: SocialAuthService,
    private http: HttpClient
    ) {
    }

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
    this.googleService.authState.subscribe((user) => {
      console.log(user);
      
      this.user = user;
      this.loggedIn = (user != null);
    });
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
          this.authService.registerUser(user).subscribe(data=> {
            if (data) {
              localStorage.setItem("token", data);
              console.log(data); 
            }
          })
      }
  }

  onSignIn() {
    this.router.navigateByUrl('/login')
  }

  // refreshToken(): void {
  //   this.googleService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(data=> {
  //     // console.log(data);
  //   })
  // }
}
