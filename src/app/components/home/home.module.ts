import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarVisitorModule } from '../visitor/navbar-visitor/navbar-visitor.module';
import { NavbarUserModule } from '../user/navbar-user/navbar-user.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarVisitorModule,
    NavbarUserModule
  ]
})
export class HomeModule { }
