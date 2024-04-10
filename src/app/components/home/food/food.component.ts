import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]

  ngOnInit(): void {
    this.productService.getCategory(Category.FOOD).subscribe({
      next: data => this.products = data
    })
  }
}
