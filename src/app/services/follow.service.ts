import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FollowRequest } from '../models/followRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient
  ) { }

  followStore(request: FollowRequest) {
    return this.http.post<boolean>(environment.urlRequest + 'follow/new', request, this.getHeaders());
  }

  getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
