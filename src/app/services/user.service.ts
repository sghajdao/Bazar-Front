import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

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
    return this.http.post<User>(environment.urlRequest + "api/user/email", email, this.getHeaders());
  }

  welcome() {
    const token = localStorage.getItem("token")
    if (token) {
      const data:any = jwtDecode(token)
      if (data.iss) {
        console.log(data.email);
        
        return this.http.post<User>(environment.urlRequest + "api/user/welcome", data.email, this.getHeaders());
      }
      return this.http.post<any>(environment.urlRequest + "api/user/welcome", data.sub, this.getHeaders());
    }
    else
      return null;
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
