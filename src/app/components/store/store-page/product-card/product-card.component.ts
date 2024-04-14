import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from 'src/app/components/modals/delete-product/delete-product.component';
import { Product } from 'src/app/models/entities/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(
    private modal: MatDialog,
  ) {}

  @Input() product?: {product: Product, myStore: boolean}

  deleteProduct() {
    this.modal.open(DeleteProductComponent, {data: this.product?.product})
  }
}
