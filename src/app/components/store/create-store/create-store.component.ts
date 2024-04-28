import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, mergeMap } from 'rxjs';
import { ImageResponse } from 'src/app/models/dtos/image-response';
import { Store } from 'src/app/models/entities/store';
import { ImageService } from 'src/app/services/image.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnDestroy {

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private storeService: StoreService,
    private userService:UserService,
    private router: Router
  ) {}

  selectedFile?: File
  selectedImage: string | ArrayBuffer = ''

  subscriptions: Subscription[] = []

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
      const sub = this.uploadImage().pipe(mergeMap(res=> this.create(res[0].name))).subscribe({
        next: data => this.router.navigateByUrl('/store/' + data.id)
      })
      this.subscriptions.push(sub)
    }
  }

  create(image: string): Observable<Store> {
    if (this.form.value.country && this.form.value.email && this.form.value.name
      && this.form.value.phone && this.form.value.subtitle) {
        const store:Store = {
          createdAt: new Date(),
          name: this.form.value.name,
          subtitle: this.form.value.subtitle,
          email: this.form.value.email,
          verified: false,
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
