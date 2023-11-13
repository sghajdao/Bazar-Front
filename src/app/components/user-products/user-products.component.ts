import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.dto';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  constructor() {
  }

  productToEdit?: Product
  edit: boolean = false

  ngOnInit(): void {}

  editProduct(product:Product) {
    this.productToEdit = product;
    this.edit = true
  }

  productEdited(edited:boolean) {
    this.edit = edited
  }
}
