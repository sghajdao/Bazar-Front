import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products?: Product[]
  
  ngOnInit(): void {
    this.productService.getCategory(Category.PET).subscribe({
      next: data => this.products = data
    })
  }
}
