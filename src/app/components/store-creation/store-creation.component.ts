import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageResponse } from 'src/app/models/ImageResponse.dto';
import { Store } from 'src/app/models/store.dto';
import { ImagesService } from 'src/app/services/images.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-creation',
  templateUrl: './store-creation.component.html',
  styleUrls: ['./store-creation.component.css']
})
export class StoreCreationComponent {

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private imageService: ImagesService,
    private userService: UserService,
  ) {}

  form = this.fb.group({
    name: ['', Validators.required],
    subtitle: ['', Validators.required],
    email: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required]
  })

  selectedFile?: File
  selectedImage: string | ArrayBuffer = ''

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
      this.uploadImage().subscribe(data=> {
        if (this.form.value.country && this.form.value.email && this.form.value.name
          && this.form.value.phone && this.form.value.subtitle) {
            const store:Store = {
              name: this.form.value.name,
              subtitle: this.form.value.subtitle,
              email: this.form.value.email,
              country: this.form.value.country,
              phone: this.form.value.phone,
              image: data[0].name
            }
          
            const email = this.userService.getLogedInUser()
            this.storeService.newStore(store, email).subscribe(message=>console.log(message))
        }
      })
    }
  }
}
