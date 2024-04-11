import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const email = this.userService.getEmail()
    if (email) {
      const sub = this.userService.getUserByEmail(email).subscribe({
        next: user=> {
          if (!localStorage.getItem('userId'))
            localStorage.setItem('userId', user.id.toString())
        }
      })
      this.subscriptions.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
