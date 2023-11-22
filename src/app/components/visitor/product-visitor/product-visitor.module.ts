import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductVisitorRoutingModule } from './product-visitor-routing.module';
import { ProductVisitorComponent } from './product-visitor.component';
import { VisitorNavbarModule } from '../visitor-navbar/visitor-navbar.module';


@NgModule({
  declarations: [
    ProductVisitorComponent
  ],
  imports: [
    CommonModule,
    ProductVisitorRoutingModule,
    VisitorNavbarModule,
  ]
})
export class ProductVisitorModule { }
