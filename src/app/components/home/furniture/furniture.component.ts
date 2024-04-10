import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]

  ngOnInit(): void {
    this.productService.getCategory(Category.FURNITURE).subscribe({
      next: data => this.products = data
    })
  }
}
