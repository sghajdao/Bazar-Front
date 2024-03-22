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
import { CategorizationComponent } from './categorization/categorization.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { PublishComponent } from './publish/publish.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    CreateProductComponent,
    MainInfoComponent,
    PriceStockComponent,
    ImagesComponent,
    CategorizationComponent,
    PublishComponent
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
    MatInputModule, MatCardModule, MatIconModule,
    MatChipsModule, MatSelectModule, MatDatepickerModule,
    MatRadioModule, MatNativeDateModule
  ]
})
export class CreateProductModule { }
