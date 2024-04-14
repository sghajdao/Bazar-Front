import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/entities/user';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SessionExpiredComponent } from '../components/modals/session-expired/session-expired.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getEmail() {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      if (decoded)
        return decoded.sub
      else
        return null
    }
    return null;
  }

  getUserByEmail(email: string) {
    if (!this.authService.isAuthenticated())
      return new Observable<User>()
    return this.http.get<User>(environment.urlRequest + 'user/' + email, this.getHeaders())
  }

  getUserById(id: number) {
    if (!this.authService.isAuthenticated())
      return new Observable<User>()
    return this.http.get<User>(environment.urlRequest + 'user/id/' + id, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
