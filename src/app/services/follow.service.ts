import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FollowRequest } from '../models/dtos/followRequest';
import { environment } from 'src/environments/environment';
import { FollowingAndStarResp } from '../models/dtos/followingAndStarResp';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient
  ) { }

  followStore(request: FollowRequest) {
    return this.http.post<FollowingAndStarResp>(environment.urlRequest + 'follow/new', request, this.getHeaders());
  }

  unfollowStore(id: number, userEmail: string) {
    return this.http.delete<FollowingAndStarResp>(environment.urlRequest + 'follow/unfollow/' + id + '/' + userEmail, this.getHeaders());
  }

  getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
