import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchRoutingModule } from './product-search-routing.module';
import { ProductSearchComponent } from './product-search.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserNavbarModule } from '../../user/user-navbar/user-navbar.module';


@NgModule({
  declarations: [
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    ProductSearchRoutingModule,
    UserNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatFormFieldModule, MatInputModule,
    MatRadioModule, MatDatepickerModule
  ]
})
export class ProductSearchModule { }
