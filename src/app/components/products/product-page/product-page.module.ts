import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { ProductImagesComponent } from './product-images/product-images.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductImagesComponent,
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    NavbarUserModule,
    MatIconModule, MatButtonModule, MatProgressSpinnerModule
  ]
})
export class ProductPageModule { }
