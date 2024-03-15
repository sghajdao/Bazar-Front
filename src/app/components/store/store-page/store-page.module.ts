import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorePageRoutingModule } from './store-page-routing.module';
import { StorePageComponent } from './store-page.component';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    StorePageComponent
  ],
  imports: [
    CommonModule,
    StorePageRoutingModule,
    NavbarUserModule, MatMenuModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatProgressSpinnerModule
  ]
})
export class StorePageModule { }
