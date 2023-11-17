import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follow } from '../models/follow.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient,
  ) { }

  followStore(follow:Follow) {
    return this.http.post<Follow>(environment.urlRequest + "api/follow/new", follow, this.getHeaders())
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
