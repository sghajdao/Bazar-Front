import { Injectable } from '@angular/core';
import { Register } from '../models/register.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login.dto';
import { LoginResponse } from '../models/loginResponse.dto';
import jwtDecode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    ) { }

  registerUser(user:Register) {
    return this.http.post<LoginResponse>(environment.urlRequest + 'api/v1/auth/register', user)
  }

  loginUser(user:Login) {
    return this.http.post<LoginResponse>(environment.urlRequest + 'api/v1/auth/login', user)
  }

  getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
