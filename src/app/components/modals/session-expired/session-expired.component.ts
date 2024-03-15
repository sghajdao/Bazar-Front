import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.css']
})
export class SessionExpiredComponent {

  constructor(
    private router: Router
  ) {}

  login() {
    this.router.navigateByUrl("/auth/login")
  }

  logout() {
    localStorage.clear()
  }
}
