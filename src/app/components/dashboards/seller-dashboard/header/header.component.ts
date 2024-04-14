import { Component, Input, OnInit } from '@angular/core';
import { StoreResponse } from 'src/app/models/dtos/storeResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  @Input() response?: StoreResponse

  earning: number = 0
  buying: number = 0
  followers: number = 0
  stars: number = 0

  ngOnInit(): void {
    if (this.response) {
      this.response.store.sales?.forEach(product => this.earning += product.price)
      this.buying = this.response.store.sales? this.response.store.sales.length : 0
      this.followers = this.response.store.followers? this.response.store.followers.length : 0
      this.stars = this.response.store.stars? this.response.store.stars.length : 0
    }
  }
}
