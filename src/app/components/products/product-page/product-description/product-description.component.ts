import { Component, Input } from '@angular/core';
import { ProductResponse } from 'src/app/models/product-response';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  constructor() {}

  @Input() response?: ProductResponse
}
