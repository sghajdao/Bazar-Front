import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {}

  products: Product[] = []

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      mergeMap(res=> this.productService.searchQuery(res['title']))
    ).subscribe({
      next: data=> {
        this.products = data
      },
      error: ()=> this.router.navigateByUrl('/not-found')
    })
  }
}
