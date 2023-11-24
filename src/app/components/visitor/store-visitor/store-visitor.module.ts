import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreVisitorRoutingModule } from './store-visitor-routing.module';
import { StoreVisitorComponent } from './store-visitor.component';
import { VisitorNavbarModule } from '../visitor-navbar/visitor-navbar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserNavbarModule } from '../../user/user-navbar/user-navbar.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    StoreVisitorComponent
  ],
  imports: [
    CommonModule,
    StoreVisitorRoutingModule,
    VisitorNavbarModule,
    UserNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ]
})
export class StoreVisitorModule { }
