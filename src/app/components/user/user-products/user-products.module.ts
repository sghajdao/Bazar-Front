import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { UserProductsComponent } from './user-products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { VisitorNavbarModule } from '../../visitor/visitor-navbar/visitor-navbar.module';
import { StoreComponent } from './store/store.component';
import { StoreDataComponent } from './store-data/store-data.component';


@NgModule({
  declarations: [
    UserProductsComponent,
    EditProductComponent,
    StoreComponent,
    StoreDataComponent,
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule,
    UserNavbarModule,
    VisitorNavbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatFormFieldModule, MatInputModule,
    MatRadioModule, MatDatepickerModule
  ]
})
export class UserProductsModule { }
