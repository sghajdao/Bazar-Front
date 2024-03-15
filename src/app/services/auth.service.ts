import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { AuthResponse } from '../models/auth-response';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request';
import { jwtDecode } from 'jwt-decode';
import { MatDialog } from '@angular/material/dialog';
import { SessionExpiredComponent } from '../components/modals/session-expired/session-expired.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  isAuthenticated() {
    const token = localStorage.getItem("token")
    if (token) {
      if (jwtDecode(token).exp! - Math.floor((new Date).getTime() / 1000) > 0)
        return true
    }
    return false
  }

  sessionsExpired() {
    const token = localStorage.getItem("token")
    if (token) {
      if (jwtDecode(token).exp! - Math.floor((new Date).getTime() / 1000) < 0)
        this.dialog.open(SessionExpiredComponent);
    }
  }

  register(request: RegisterRequest) {
    return this.http.post<AuthResponse>(environment.urlRequest + 'auth/register', request);
  }

  login(request: LoginRequest) {
    return this.http.post<AuthResponse>(environment.urlRequest + 'auth/login', request);
  }
}
