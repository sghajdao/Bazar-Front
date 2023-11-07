import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreCreationRoutingModule } from './store-creation-routing.module';
import { StoreCreationComponent } from './store-creation.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    StoreCreationComponent
  ],
  imports: [
    CommonModule,
    StoreCreationRoutingModule,
    UserNavbarModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    MatCardModule, MatIconModule,
    MatSelectModule, MatButtonModule
  ]
})
export class StoreCreationModule { }
