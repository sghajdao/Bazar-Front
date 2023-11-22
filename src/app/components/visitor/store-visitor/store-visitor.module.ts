import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreVisitorRoutingModule } from './store-visitor-routing.module';
import { StoreVisitorComponent } from './store-visitor.component';


@NgModule({
  declarations: [
    StoreVisitorComponent
  ],
  imports: [
    CommonModule,
    StoreVisitorRoutingModule
  ]
})
export class StoreVisitorModule { }
