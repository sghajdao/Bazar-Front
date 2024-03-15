import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MainInfoComponent } from './main-info/main-info.component';
import { MatIconModule } from '@angular/material/icon';
import { PriceStockComponent } from './price-stock/price-stock.component';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    MainInfoComponent,
    PriceStockComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    NavbarUserModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatCardModule, MatIconModule
  ]
})
export class CreateProductModule { }
