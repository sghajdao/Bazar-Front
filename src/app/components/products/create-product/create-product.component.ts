import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, NgModel, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { mergeMap, Observable, Subscription } from 'rxjs';
import { ImageResponse } from 'src/app/models/image-response';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private imageService: ImageService,
    private productService: ProductService,
    private router: Router,
  ) {}

  seller?: User

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required]
  })
  fourthFormGroup = this.fb.group({
    fourthCtrl: ['', Validators.required]
  })
  fifthFormGroup = this.fb.group({
    fifthCtrl: ['', Validators.required]
  })

  mainInfo?: FormGroup
  priceStock?: FormGroup
  selectedFile?: {selectedFile:File[], selectedImage:(string | ArrayBuffer)[]}
  categorization?: FormGroup
  publishForm?: FormGroup

  subscriptions: Subscription[] = []

  error: boolean = false

  ngOnInit(): void {
    const email = this.userService.getEmail()
    if (email) {
      const sub = this.userService.getUserByEmail(email).subscribe({
        next: user => this.seller = user
      })
      this.subscriptions.push(sub)
    }
    else
      this.router.navigateByUrl('/auth/login')
  }

  getMainInfo(event: FormGroup) {
    this.mainInfo = event
  }

  getPrice(event: FormGroup) {
    this.priceStock = event
  }

  getImages(event: {selectedFile:File[], selectedImage:(string | ArrayBuffer)[]}) {
    this.selectedFile = event
  }

  getCategorization(event: FormGroup) {
    this.categorization = event
  }

  uploadImages(): Observable<ImageResponse[]> {
    const formData = new FormData();
    for (let index = 0; index < this.selectedFile!.selectedFile.length; index++) {
      if (this.selectedFile?.selectedFile[index].name) {
        const element = this.selectedFile.selectedFile[index];
        formData.append('image', element);
      }
    }
    return this.imageService.uploadImage(formData)
  }

  create(event: FormGroup, images: ImageResponse[]) {
    this.publishForm = event
    let product: Product = {
      createdAt: new Date(),
      title: this.mainInfo?.value.title,
      description: this.mainInfo?.value.description,
      price: this.priceStock?.value.price,
      stock: this.priceStock?.value.stock,
      images: [],
      category: this.categorization?.value.category,
      brand: this.categorization?.value.brand,
      collections: this.categorization?.value.collection,
      keywords: this.categorization?.value.keyword,
      visibility: this.publishForm.value.visible,
      pushDate: this.publishForm.value.date,
      store: this.seller?.store
    }
    images.forEach(img => product.images?.push(img.name))
    return this.productService.createProduct(product)
  }

  publish(event: FormGroup) {
    if (this.mainInfo?.valid && this.priceStock?.valid && this.selectedFile?.selectedImage 
      && this.categorization?.valid && event.valid) {
        this.error = false
      const sub = this.uploadImages().pipe(mergeMap(res => this.create(event, res))).subscribe({
        next: data => this.router.navigateByUrl('/store/' + this.seller?.store?.id)
      })
      this.subscriptions.push(sub)
    }
    else
      this.error = true
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
