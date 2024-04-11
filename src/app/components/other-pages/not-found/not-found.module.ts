import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    NavbarUserModule, MatButtonModule
  ]
})
export class NotFoundModule { }
