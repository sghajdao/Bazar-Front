import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';
import { NavbarUserModule } from '../../user/navbar-user/navbar-user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    NavbarUserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCardModule, MatProgressSpinnerModule
  ]
})
export class EditProductModule { }
