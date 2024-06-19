import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService
  ) {}

  products?: Product[]
  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const sub = this.productService.getBestSeller().subscribe({
      next: res => this.products = res
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
