import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-navbar',
  templateUrl: './visitor-navbar.component.html',
  styleUrls: ['./visitor-navbar.component.css']
})
export class VisitorNavbarComponent {

  constructor(
    private router: Router
  ) {}

  goToLogin() {
    this.router.navigateByUrl('/login')
  }
}
