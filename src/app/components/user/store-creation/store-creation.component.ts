import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class StoreCreationComponent implements OnDestroy {

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private imageService: ImagesService,
    private userService: UserService,
    private router: Router,
  ) {}

  subscription: Subscription[] = []

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
      const sub:Subscription =  this.uploadImage().subscribe(data=> {
        if (this.form.value.country && this.form.value.email && this.form.value.name
          && this.form.value.phone && this.form.value.subtitle) {
            const store:Store = {
              name: this.form.value.name,
              subtitle: this.form.value.subtitle,
              email: this.form.value.email,
              country: this.form.value.country,
              phone: this.form.value.phone,
              image: data[0].name,
            }
          
            const email = this.userService.getLogedInUser()
            const sub2:Subscription = this.storeService.newStore(store, email).subscribe({
              next: message=> {
                this.router.navigateByUrl('/profile')
              }
            })
            this.subscription.push(sub2)
        }
      })
      this.subscription.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
