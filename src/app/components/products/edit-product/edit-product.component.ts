import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Observable, Subscription } from 'rxjs';
import { ImageResponse } from 'src/app/models/dtos/image-response';
import { Product } from 'src/app/models/entities/product';
import { ProductResponse } from 'src/app/models/dtos/product-response';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private imageService: ImageService,
    private fb: FormBuilder,
  ) {}

  response?: ProductResponse
  subscriptions: Subscription[] = []

  selectedFile: File[] = [new File([], ''), new File([], ''), new File([], ''), new File([], '')]
  selectedImage: (string | ArrayBuffer)[] = ['','','',''];
  removedImages: number[] = []

  old: any

  ngOnInit(): void {
    const sub = this.route.params.pipe(mergeMap(id => this.productService.getById(+id['id']))).subscribe({
      next: data => {
        this.response = data
        for (let index = 0; index < this.response.product.images!.length; index++) {
          this.selectedImage[index] = 'http://localhost:8181/api/image/' + this.response.product.images![index]
        }
        this.old = this.fb.group({
          title: [this.response.product.title, Validators.required],
          description: [this.response.product.description, Validators.required],
          price: [this.response.product.price, Validators.required],
          stock: [this.response.product.stock, Validators.required]
        })
      },
      error: () => this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
  }

  onImageSelected(event :any, index:number) {
    this.selectedFile[index] = (event.target.files[0]);
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage[index] = (e.target?.result!);
      };
      reader.readAsDataURL(this.selectedFile[index]);
    }
  }

  onRemoveImage(index:number) {
    this.selectedImage[index] = ''
    this.selectedFile[index] = new File([], '')
    this.removedImages.push(index)
  }

  uploadImages(): Observable<ImageResponse[]> {
    if (this.selectedFile[0].name || this.selectedFile[1].name) {
      const formData = new FormData();
      for (let index = 0; index < this.selectedFile.length; index++) {
        if (this.selectedFile[index].name) {
          const element = this.selectedFile[index];
          formData.append('image', element);
        }
      }
      return this.imageService.uploadImage(formData)
    }
    return new Observable()
  }

  update(data: FormGroup, images: ImageResponse[]) {
    let product: Product = {
      id: this.response?.product.id,
      createdAt: this.response?.product.createdAt!,
      title: data.value.title,
      description: data.value.description,
      price: data.value.price,
      stock: data.value.stock,
      images: [],
      category: this.response?.product.category!,
      brand: this.response?.product.brand!,
      collections: this.response?.product.collections!,
      visibility: this.response?.product.visibility!,
    }
    if (images)
      images.forEach(img => product.images?.push(img.name))
    if (this.removedImages.length) {
      let i = 0;
      for (let img of this.response?.product.images!) {
        if (!this.removedImages.includes(i))
            product.images?.push(img)
        i++;
      }
    }
    return this.productService.updateProduct(product);
  }

  updateProduct() {
    if (this.old.valid && (this.selectedFile[0].name || this.selectedFile[1].name)) {
      const sub = this.uploadImages().pipe(mergeMap(res => this.update(this.old, res))).subscribe({
        next: data => this.router.navigateByUrl('/store/' + data.store.id)
      })
      this.subscriptions.push(sub)
    }
    else {
      const sub = this.update(this.old, []).subscribe({
        next: data => this.router.navigateByUrl('/store/' + data.store.id)
      })
      this.subscriptions.push(sub)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
