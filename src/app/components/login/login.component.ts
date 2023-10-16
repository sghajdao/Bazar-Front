import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  onSignIn() {
    this.validators = {
      email: this.userData.get('email')!.invalid,
      password: this.userData.get('password')!.invalid
    }

    if (!this.validators.email && !this.validators.password) {
      const user:any = this.userData.value
      this.authService.loginUser(user).subscribe(data=> {
        if (data.message === "Login Success") {
          localStorage.setItem("token", data.token);
          console.log(data);
        }
      })
    }
  }

  onSignUp() {
    this.router.navigateByUrl('/register')
  }
}
