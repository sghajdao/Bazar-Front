import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-price-stock',
  templateUrl: './price-stock.component.html',
  styleUrls: ['./price-stock.component.css']
})
export class PriceStockComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  @Output() priceStock = new EventEmitter<FormGroup>()

  priceAndStock = this.fb.group({
    price: [0, Validators.required],
    stock: [0, Validators.required]
  })

  next() {
    this.priceStock.emit(this.priceAndStock)
  }
}
