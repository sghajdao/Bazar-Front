import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {

  constructor() {}

  @Input() product?: Product
  @Output() aler = new EventEmitter<boolean>()

  addToCart() {
    const cart = localStorage.getItem('cart')
    if (cart) {
      const products = JSON.parse(cart)
      if (!products.includes(this.product?.id))
        products.push(this.product?.id)
      const jsonString = JSON.stringify(products);
      localStorage.setItem('cart', jsonString);
    }
    else {
      const jsonObject: any[] = [this.product?.id]
      const jsonString = JSON.stringify(jsonObject);
      localStorage.setItem('cart', jsonString);
    }
    this.aler.emit(true)
  }
}
