import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  userData = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  validators: {email:boolean, password:boolean} = {
    email: false,
    password: false
  }

  error:boolean = false

  onSignIn() {
    this.validators = {
      email: this.userData.get('email')!.invalid,
      password: this.userData.get('password')!.invalid
    }

    if (this.userData.value.email && this.userData.value.password) {      
      const user: LoginRequest = {email: this.userData.value.email, password: this.userData.value.password}
      this.authService.login(user).subscribe({
        next: data=> {
          if (data.message === "Login Success") {
            localStorage.setItem("token", data.token);
            this.router.navigateByUrl('')
          }
        },
        error: err=> {
          this.error = true
        }
      })
    }
  }

  onSignUp() {
    this.router.navigateByUrl('/auth/register')
  }
}
