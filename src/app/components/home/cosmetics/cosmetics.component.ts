import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category, Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const sub =  this.productService.getCategory(Category.COSMITICS).subscribe({
      next: data => this.products = data
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
