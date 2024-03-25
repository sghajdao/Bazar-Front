import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageClickedComponent } from 'src/app/components/modals/image-clicked/image-clicked.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent {

  constructor(
    private modal: MatDialog,
  ) {}

  @Input() product?: Product

  index: number = 0

  nextImage(step: number) {
    if (this.index + step >= 0 && this.index + step < this.product?.images?.length!)
      this.index += step
  }

  selectImage() {
    this.modal.open(ImageClickedComponent, {data: this.product?.images![this.index]})
  }
}
