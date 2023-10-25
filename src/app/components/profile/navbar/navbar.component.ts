import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserLite } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() loggedInUser?:UserLite

  constructor(
    private router: Router
  ) {}

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }
}
