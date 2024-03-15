import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarVisitorComponent } from './navbar-visitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarVisitorComponent
  ],
  exports: [
    NavbarVisitorComponent
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
export class NavbarVisitorModule { }
