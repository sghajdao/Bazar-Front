import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/entities/user';
import { VerifyEmailRequest } from 'src/app/models/dtos/verifyEmailRequest';
import { MailService } from 'src/app/services/mail.service';
import { UserService } from 'src/app/services/user.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-verifiy-email',
  templateUrl: './verifiy-email.component.html',
  styleUrls: ['./verifiy-email.component.css']
})
export class VerifiyEmailComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private mailService: MailService,
    private storeService: StoreService,
    private router: Router,
  ) {}

  user?: User
  sent: boolean = false
  form = new FormGroup({number: new FormControl})
  number?: number
  loading: boolean = false
  error: boolean = false

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const email = this.userService.getEmail();
    if (email) {
      const sub = this.userService.getUserByEmail(email).subscribe({
        next: data => {
          this.user = data
        }
      })
      this.subscriptions.push(sub)
    }
    else
      this.router.navigateByUrl('/auth/login')
  }

  sendVerifyNumber() {
    if (this.user) {
      this.loading = true
      this.number = Math.floor(Math.random()*90000) + 10000;
      const request: VerifyEmailRequest = {
        email: this.user.email,
        number: this.number
      }
      const sub = this.mailService.sendVerifyNumber(request).subscribe({
        next: data =>{
          this.sent = true
          this.loading = false
        }
      })
      this.subscriptions.push(sub)
    }
  }

  verifyEmail() {
    const email = this.userService.getEmail()
    if (this.user && !this.user.store && this.form.valid && +this.form.value.number === this.number) {
      this.loading = true
      this.error = false
      const sub = this.mailService.verifyEmail(this.user.email).subscribe({
        next: data => {
          this.loading = false
          this.router.navigateByUrl('/')
        },
        error: () => this.router.navigateByUrl('/auth/login')
      })
      this.subscriptions.push(sub)
    }
    else if (!email) {
      this.router.navigateByUrl('/auth/login')
    }
    else if (this.form.valid && +this.form.value.number != this.number)
      this.error = true
    else if (this.user && this.user.store) {
      this.loading = true
      this.error = false
      this.verifyEmail()
    }
  }

  verifyStoreEmail() {
    const sub = this.storeService.verifyEmail(this.user?.store?.id!).subscribe({
      next: () => {
        this.loading = false
        this.router.navigateByUrl('/')
      },
      error: () => this.router.navigateByUrl('/auth/login')
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
