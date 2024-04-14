import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarRequest } from '../models/dtos/starRequest';
import { Star } from '../models/entities/star';
import { environment } from 'src/environments/environment';
import { FollowingAndStarResp } from '../models/dtos/followingAndStarResp';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(
    private http: HttpClient,
  ) { }

  rateStore(request: StarRequest) {
    return this.http.post<FollowingAndStarResp>(environment.urlRequest + 'star/rate', request, this.getHeaders());
  }

  removeStar(storeId: number, userEmail: string) {
    return this.http.delete<FollowingAndStarResp>(environment.urlRequest + 'star/remove/' + storeId + '/' + userEmail, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
