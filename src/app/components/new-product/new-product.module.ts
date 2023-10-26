import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    UserNavbarModule,
    MatCardModule, MatFormFieldModule, MatInputModule
  ]
})
export class NewProductModule { }
