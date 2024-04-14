import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, mergeMap, of } from 'rxjs';
import { ImageResponse } from 'src/app/models/dtos/image-response';
import { Store } from 'src/app/models/entities/store';
import { ImageService } from 'src/app/services/image.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private storeService: StoreService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  store?: Store

  selectedFile?: File
  selectedImage: string | ArrayBuffer = ''
  form: any

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const userId: number = localStorage.getItem('userId')? +localStorage.getItem('userId')!: -1;
    const sub = this.route.params.pipe(mergeMap(param=> this.storeService.getStoreById({storeId:+param['id'], userId:userId}))).subscribe({
      next: res=> {
        this.store = res.store
        this.selectedImage = 'http://localhost:8181/api/image/' + this.store.image
        this.form = this.fb.group({
          name: [this.store.name, Validators.required],
          subtitle: [this.store.subtitle, Validators.required],
          email: [this.store.email, Validators.required],
          country: [this.store.country, Validators.required],
          phone: [this.store.phone, Validators.required]
        })
      },
      error: () => this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
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
    return new Observable();
  }

  editStore() {
    if (this.selectedImage) {
      const sub = this.uploadImage().pipe(mergeMap(res=> this.edit(res[0].name))).
        subscribe(data=>this.router.navigateByUrl('/store/' + this.store?.id))
      this.subscriptions.push(sub)
    }
  }

  edit(image: string): Observable<Store> {
    if (this.form.value.country && this.form.value.email && this.form.value.name
      && this.form.value.phone && this.form.value.subtitle) {
        const store:Store = {
          id: this.store?.id,
          createdAt: this.store?.createdAt!,
          name: this.form.value.name,
          subtitle: this.form.value.subtitle,
          email: this.form.value.email,
          country: this.form.value.country,
          phone: this.form.value.phone,
          image: image,
        }
        return this.storeService.updateStore(store);
    }
    return new Observable()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
