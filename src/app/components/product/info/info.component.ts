import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.dto';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnChanges {

  @Input() product?:Product

  constructor() {}

  pushDate: string = ''

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product && this.product.pushDate)
      this.pushDate = this.getPushDate(this.product.pushDate)
  }

  getPushDate(pushdate:Date) {
    const date = new Date(pushdate)
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return formattedDate
  }
}
