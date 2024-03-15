import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
      const email = this.userService.getEmail()
      if (email) {
        this.userService.getUserByEmail(email).subscribe({
          next: user=> {
            if (!localStorage.getItem('userId'))
              localStorage.setItem('userId', user.id.toString())
          }
        })
      }
  }
}
