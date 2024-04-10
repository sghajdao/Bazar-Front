import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  
  ngOnInit(): void {
    this.productService.getCategory(Category.OFFICE).subscribe({
      next: data => this.products = data
    })
  }
}
