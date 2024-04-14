import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { SellerDashboardComponent } from './seller-dashboard.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SellerDashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SellerDashboardRoutingModule,
    NavbarUserModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SellerDashboardModule { }
