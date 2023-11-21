import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreSettingsComponent } from './store-settings.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { StoreSettingsRoutingModule } from './store-settings-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    StoreSettingsComponent
  ],
  imports: [
    CommonModule,
    StoreSettingsRoutingModule,
    UserNavbarModule,
    MatCardModule,
    MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, FormsModule,
    ReactiveFormsModule
  ]
})
export class StoreSettingsModule { }
