import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditStoreRoutingModule } from './edit-store-routing.module';
import { EditStoreComponent } from './edit-store.component';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    EditStoreComponent
  ],
  imports: [
    CommonModule,
    EditStoreRoutingModule,
    NavbarUserModule,
    MatCardModule, MatButtonModule,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatOptionModule, MatSelectModule, MatProgressSpinnerModule
  ]
})
export class EditStoreModule { }
