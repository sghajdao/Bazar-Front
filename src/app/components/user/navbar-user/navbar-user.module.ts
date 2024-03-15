import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarUserComponent } from './navbar-user.component';


@NgModule({
  declarations: [
    NavbarUserComponent
  ],
  exports: [
    NavbarUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatIconModule, MatButtonModule, MatAutocompleteModule
  ]
})
export class NavbarUserModule { }
