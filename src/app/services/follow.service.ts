import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follow } from '../models/follow.dto';
import { environment } from 'src/environments/environment';
import { FollowResponse } from '../models/followResponse.dto';
import { FollowRequest } from '../models/followRequest.dto';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient,
  ) { }

  followStore(follow:FollowRequest) {
    return this.http.post<Follow>(environment.urlRequest + "api/follow/new", follow, this.getHeaders())
  }

  getFollowersByStoreId(id:number) {
    return this.http.get<FollowResponse>(environment.urlRequest + 'api/follow/' + id, this.getHeaders());
  }

  deleteFollow(id:number) {
    return this.http.delete<boolean>(environment.urlRequest + 'api/follow/delete/' + id, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
