import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, mergeMap, of } from 'rxjs';
import { ImageResponse } from 'src/app/models/ImageResponse.dto';
import { Store } from 'src/app/models/store.dto';
import { ImagesService } from 'src/app/services/images.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.component.html',
  styleUrls: ['./store-settings.component.css']
})
export class StoreSettingsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private imageService:  ImagesService,
    private storeService: StoreService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  store?: Store

  selectedFile?: File
  selectedImage: string | ArrayBuffer = ''

  form:any

  ngOnInit(): void {
    const email = this.userService.getLogedInUser();
    this.userService.getUserByEmail(email).subscribe({
      next: data=> {
        this.store = data.store
        this.form = this.fb.group({
          name: [this.store?.name, Validators.required],
          subtitle: [this.store?.subtitle, Validators.required],
          email: [this.store?.email, Validators.required],
          country: [this.store?.country, Validators.required],
          phone: [this.store?.phone, Validators.required]
        })
      }
    })
  }

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
    else if(this.store) {
      const image: ImageResponse[] = [{name: this.store.image.toString()}]
      return of(image);
    }
    return new Observable()
  }

  editStore() {
    if (this.form.value.country && this.form.value.email && this.form.value.name
        && this.form.value.phone && this.form.value.subtitle) {
      const sub:Subscription =  this.uploadImage().pipe(
        mergeMap(res=> this.update(res))
      ).subscribe(()=> this.router.navigateByUrl('/profile'))
    }
  }

  update(image: ImageResponse[]): Observable<Store> {
    const store: Store = {
      country: this.form.value.country,
      email: this.form.value.email,
      image: image[0].name,
      name: this.form.value.name,
      phone: this.form.value.phone,
      subtitle: this.form.value.subtitle,
      followers: this.store?.followers,
      id: this.store?.id,
      product: this.store?.product,
    }
    return this.storeService.updateStore(store)
  }
}
