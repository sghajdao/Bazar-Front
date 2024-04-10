import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]

  ngOnInit(): void {
    this.productService.getCategory(Category.COSMITICS).subscribe({
      next: data => this.products = data
    })
  }
}
