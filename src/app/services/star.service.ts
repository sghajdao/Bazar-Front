import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarRequest } from '../models/dtos/starRequest';
import { Star } from '../models/entities/star';
import { environment } from 'src/environments/environment';
import { FollowingAndStarResp } from '../models/dtos/followingAndStarResp';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  rateStore(request: StarRequest) {
    if (!this.authService.isAuthenticated())
      return new Observable<FollowingAndStarResp>()
    return this.http.post<FollowingAndStarResp>(environment.urlRequest + 'star/rate', request, this.getHeaders());
  }

  removeStar(storeId: number, userEmail: string) {
    if (!this.authService.isAuthenticated())
      return new Observable<FollowingAndStarResp>()
    return this.http.delete<FollowingAndStarResp>(environment.urlRequest + 'star/remove/' + storeId + '/' + userEmail, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
