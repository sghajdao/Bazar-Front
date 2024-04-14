import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category, Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  subscriptions: Subscription[] = []
  
  ngOnInit(): void {
    const sub = this.productService.getCategory(Category.HOUSEHOLD).subscribe({
      next: data => this.products = data
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
