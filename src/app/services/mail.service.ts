import { Injectable } from '@angular/core';
import { VerifyEmailRequest } from '../models/verifyEmailRequest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
  ) { }

  sendVerifyNumber(request: VerifyEmailRequest) {
    return this.http.post<boolean>(environment.urlRequest + 'mail/verify', request, this.getHeaders())
  }

  verifyEmail(email: string) {
    return this.http.put<boolean>(environment.urlRequest + 'user/verify', email, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
