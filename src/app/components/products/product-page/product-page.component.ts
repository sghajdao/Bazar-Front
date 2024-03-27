import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ProductResponse } from 'src/app/models/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  product?: ProductResponse
  addToCart: boolean = false

  ngOnInit(): void {
    this.route.params.pipe(mergeMap(id => this.productService.getById(+id['id']))).subscribe({
      next: data => this.product = data
    })
  }

  showAlert(event: boolean) {
    this.addToCart = event
  }
}
