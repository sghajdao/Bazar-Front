import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastProductsRoutingModule } from './last-products-routing.module';
import { LastProductsComponent } from './last-products.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LastProductsComponent
  ],
  imports: [
    CommonModule,
    LastProductsRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule,
  ]
})
export class LastProductsModule { }
