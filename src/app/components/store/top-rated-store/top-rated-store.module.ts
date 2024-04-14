import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedStoreRoutingModule } from './top-rated-store-routing.module';
import { TopRatedStoreComponent } from './top-rated-store.component';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TopRatedStoreComponent
  ],
  imports: [
    CommonModule,
    TopRatedStoreRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule,
    MatIconModule, MatButtonModule
  ]
})
export class TopRatedStoreModule { }
