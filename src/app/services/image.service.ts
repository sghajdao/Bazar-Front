import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageResponse } from '../models/image-response';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  uploadImage(image: FormData) {
    if (!this.authService.isAuthenticated())
      return new Observable<ImageResponse[]>()
    return this.http.post<ImageResponse[]>(environment.urlRequest + "image/upload", image, this.getHeaders());
  }

  getImage(name:(string | ArrayBuffer)) {
    return this.http.get(environment.urlRequest + 'image/' + name);
  }

  getHeaders(){
    const accessToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${accessToken}` };
    return {headers};
  }
}
