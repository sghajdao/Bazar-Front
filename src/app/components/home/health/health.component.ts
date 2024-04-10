import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]

  ngOnInit(): void {
    this.productService.getCategory(Category.HEALTH).subscribe({
      next: data => this.products = data
    })
  }
}
