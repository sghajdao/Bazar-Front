import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorNavbarComponent } from './visitor-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    VisitorNavbarComponent,
  ],
  exports: [
    VisitorNavbarComponent
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
export class VisitorNavbarModule { }
