import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImagesComponent } from './images/images.component';
import { DescriptionComponent } from './description/description.component';
import { InfoComponent } from './info/info.component';
import { BuyComponent } from './buy/buy.component';
import { VisitorNavbarModule } from '../../visitor/visitor-navbar/visitor-navbar.module';


@NgModule({
  declarations: [
    ProductComponent,
    ImagesComponent,
    DescriptionComponent,
    InfoComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UserNavbarModule,
    VisitorNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule,
  ]
})
export class ProductModule { }
