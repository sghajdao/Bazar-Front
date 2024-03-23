import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService
  ) {}

  deleteProduct() {
    this.productService.deleteProduct(this.data.id!).subscribe({
      next: res => console.log(res)
    });
  }
}
