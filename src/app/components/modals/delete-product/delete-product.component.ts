import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnDestroy {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
  ) {}

  subscriptions: Subscription[] = []

  deleteProduct() {
    const sub = this.productService.deleteProduct(this.data.id!).subscribe({
      next: res => window.location.reload()
    });
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
