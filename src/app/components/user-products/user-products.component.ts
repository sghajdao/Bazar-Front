import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {

  constructor(
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.params.subscribe(data=>{
      console.log(data['id']);
    })
  }
}
