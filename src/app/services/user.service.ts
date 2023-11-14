import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserResponse } from '../models/userResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getLogedInUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const data:any = jwtDecode(token);
      if (data && data.iss === "https://accounts.google.com")
        return data.email;
      return data.sub;
    }
    return null;
  }

  getUserByEmail(email:string) {
    return this.http.post<UserResponse>(environment.urlRequest + "api/user/email", email, this.getHeaders());
  }

  getUserById(id:number) {
    return this.http.post<User>(environment.urlRequest + 'api/user/id', id, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
