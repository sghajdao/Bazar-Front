import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  
  ngOnInit(): void {
    this.productService.getCategory(Category.DIGITAL).subscribe({
      next: data => this.products = data
    })
  }
}