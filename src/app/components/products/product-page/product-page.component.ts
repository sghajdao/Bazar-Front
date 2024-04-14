import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { ProductResponse } from 'src/app/models/dtos/product-response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {}

  product?: ProductResponse
  addToCart: boolean = false

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const sub = this.route.params.pipe(mergeMap(id => this.productService.getById(+id['id']))).subscribe({
      next: data => this.product = data,
      error: () => this.router.navigateByUrl('/not-found')
    })
    this.subscriptions.push(sub)
  }

  showAlert(event: boolean) {
    this.addToCart = event
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
