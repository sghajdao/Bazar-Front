import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestSellerRoutingModule } from './best-seller-routing.module';
import { BestSellerComponent } from './best-seller.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    BestSellerComponent
  ],
  imports: [
    CommonModule,
    BestSellerRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule,
  ]
})
export class BestSellerModule { }
