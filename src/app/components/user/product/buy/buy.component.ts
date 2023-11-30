import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.dto';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  @Input() product?: Product

  constructor() {}
}
