import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  
  ngOnInit(): void {
    this.productService.getCategory(Category.MEDIA).subscribe({
      next: data => this.products = data
    })
  }
}
