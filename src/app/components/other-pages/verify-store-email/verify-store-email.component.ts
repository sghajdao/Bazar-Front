import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VerifyEmailRequest } from 'src/app/models/dtos/verifyEmailRequest';
import { User } from 'src/app/models/entities/user';
import { MailService } from 'src/app/services/mail.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-store-email',
  templateUrl: './verify-store-email.component.html',
  styleUrls: ['./verify-store-email.component.css']
})
export class VerifyStoreEmailComponent {
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
  newEmail: {click: boolean, email: string} = {click: false, email: ''}

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
    if (this.user && this.user.store) {
      this.loading = true
      this.number = Math.floor(Math.random()*90000) + 10000;
      const request: VerifyEmailRequest = {
        email: this.user.store.email,
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
    if (this.user && this.user.store && this.form.valid && +this.form.value.number === this.number) {
      this.loading = true
      this.error = false
      const sub = this.storeService.verifyEmail(this.user.store.id!).subscribe({
        next: () => {
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
  }

  changeEmail() {
    if (!this.newEmail.click) {
      this.newEmail.click = true
      return
    }
    else if (this.newEmail.email && this.user && this.user.store) {
      const sub = this.storeService.changeEmail(this.user.store.id!, this.newEmail.email).subscribe({
        next: data => {
          if (data)
            location.reload()
        },
        error: err => this.router.navigateByUrl('/auth/login')
      })
      this.subscriptions.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
