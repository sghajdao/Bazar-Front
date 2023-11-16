import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.dto';
import { Store } from 'src/app/models/store.dto';
import { ImageComponent } from '../../modals/images/image.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  @Input() product?:Product
  @Input() store?:Store
  @Input() image?:string | ArrayBuffer

  constructor(
    public modal: MatDialog,
  ) {}

  imageIndex: number = 0

  openImage() {
    this.modal.open(ImageComponent, {data: this.image});
  }

  leftImage() {
    if (this.imageIndex > 0 && this.product?.images && this.product.images[this.imageIndex - 1])
      this.image = this.product.images[--this.imageIndex]
  }

  rightImage() {
    if (this.product?.images && this.product.images[this.imageIndex + 1])
      this.image = this.product.images[++this.imageIndex]
  }
}
