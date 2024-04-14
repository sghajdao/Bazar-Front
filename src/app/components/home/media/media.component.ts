import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category, Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  subscriptions: Subscription[] = []
  
  ngOnInit(): void {
    const sub = this.productService.getCategory(Category.MEDIA).subscribe({
      next: data => this.products = data
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
