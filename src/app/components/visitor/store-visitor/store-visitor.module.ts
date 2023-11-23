import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreVisitorRoutingModule } from './store-visitor-routing.module';
import { StoreVisitorComponent } from './store-visitor.component';
import { VisitorNavbarModule } from '../visitor-navbar/visitor-navbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    StoreVisitorComponent
  ],
  imports: [
    CommonModule,
    StoreVisitorRoutingModule,
    VisitorNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule
  ]
})
export class StoreVisitorModule { }
