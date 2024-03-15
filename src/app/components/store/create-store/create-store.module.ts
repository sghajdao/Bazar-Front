import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStoreRoutingModule } from './create-store-routing.module';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateStoreComponent } from './create-store.component';


@NgModule({
  declarations: [
    CreateStoreComponent
  ],
  imports: [
    CommonModule,
    CreateStoreRoutingModule,
    NavbarUserModule,
    MatCardModule, MatButtonModule,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatOptionModule, MatSelectModule
  ]
})
export class CreateStoreModule { }
