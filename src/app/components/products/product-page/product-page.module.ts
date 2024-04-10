import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { ProductImagesComponent } from './product-images/product-images.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceComponent } from './product-price/product-price.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductImagesComponent,
    ProductDescriptionComponent,
    ProductPriceComponent,
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    NavbarUserModule,
    MatIconModule, MatButtonModule, MatProgressSpinnerModule
  ]
})
export class ProductPageModule { }
