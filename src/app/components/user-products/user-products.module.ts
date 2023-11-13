import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { UserProductsComponent } from './user-products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    UserProductsComponent
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule,
    UserNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatMenuModule
  ]
})
export class UserProductsModule { }
