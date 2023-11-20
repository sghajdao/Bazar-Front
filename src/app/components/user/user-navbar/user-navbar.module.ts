import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserNavbarComponent
  ],
  exports: [
    UserNavbarComponent
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
export class UserNavbarModule { }
