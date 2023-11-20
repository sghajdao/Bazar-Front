import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductVisitorRoutingModule } from './product-visitor-routing.module';
import { ProductVisitorComponent } from './product-visitor.component';


@NgModule({
  declarations: [
    ProductVisitorComponent
  ],
  imports: [
    CommonModule,
    ProductVisitorRoutingModule
  ]
})
export class ProductVisitorModule { }
