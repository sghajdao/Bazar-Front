import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserNavbarComponent
  ],
  exports: [
    UserNavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatMenuModule
  ]
})
export class UserNavbarModule { }
