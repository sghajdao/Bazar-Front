import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, mergeMap } from 'rxjs';
import { ImageResponse } from 'src/app/models/image-response';
import { Store } from 'src/app/models/store';
import { ImageService } from 'src/app/services/image.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent {

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private storeService: StoreService,
    private userService:UserService
  ) {}

  selectedFile?: File
  selectedImage: string | ArrayBuffer = ''

  form = this.fb.group({
    name: ['', Validators.required],
    subtitle: ['', Validators.required],
    email: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required]
  })

  onImageSelected(event :any) {
    this.selectedFile = (event.target.files[0]);
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = (e.target?.result!);
      };
      reader.readAsDataURL(this.selectedFile); 
    }
  }

  uploadImage(): Observable<ImageResponse[]> {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      return this.imageService.uploadImage(formData)
    }
    return new Observable();
  }

  createStore() {
    if (this.selectedImage) {
      this.uploadImage().pipe(mergeMap(res=> this.create(res[0].name))).subscribe(data=>console.log(data))
    }
  }

  create(image: string): Observable<string> {
    if (this.form.value.country && this.form.value.email && this.form.value.name
      && this.form.value.phone && this.form.value.subtitle) {
        const store:Store = {
          name: this.form.value.name,
          subtitle: this.form.value.subtitle,
          email: this.form.value.email,
          country: this.form.value.country,
          phone: this.form.value.phone,
          image: image,
        }
        const email = this.userService.getEmail()
        if (email)
          return this.storeService.createStore(store, email);
    }
    return new Observable()
  }
}
