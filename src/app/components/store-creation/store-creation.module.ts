import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreCreationRoutingModule } from './store-creation-routing.module';
import { StoreCreationComponent } from './store-creation.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';


@NgModule({
  declarations: [
    StoreCreationComponent
  ],
  imports: [
    CommonModule,
    StoreCreationRoutingModule,
    UserNavbarModule
  ]
})
export class StoreCreationModule { }
