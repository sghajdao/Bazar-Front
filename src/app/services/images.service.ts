import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageResponse } from '../models/ImageResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  uploadImage(image: FormData) {
    return this.http.post<ImageResponse>(environment.urlRequest + "api/image/upload", image, this.getHeaders());
  }

  getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
