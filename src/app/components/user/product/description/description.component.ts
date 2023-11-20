import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.dto';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  @Input() product?:Product

  constructor() {}
}
