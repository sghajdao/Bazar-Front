import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keywords } from '../models/keywords.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor(
    private http: HttpClient
  ) { }

  getKeywords(query:string) {
    return this.http.get<Keywords[]>(environment.urlRequest + 'api/keywords/search/' + query, this.getHeaders());
  }

  private getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
