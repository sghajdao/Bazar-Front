import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  products?: Product[]

  ngOnInit(): void {
    this.route.params.pipe(mergeMap(word => this.productService.getByKeyword(word['word']))).subscribe({
      next: data => this.products = data
    })
  }
}
