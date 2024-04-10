import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keyword } from '../models/keyword';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(
    private http: HttpClient
  ) { }

  querySearch(word: string) {
    return this.http.get<Keyword[]>(environment.urlRequest + 'keyword/search/' + word);
  }
}
