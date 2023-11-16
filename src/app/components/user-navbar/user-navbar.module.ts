import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



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
    MatMenuModule,
    MatIconModule, MatButtonModule
  ]
})
export class UserNavbarModule { }
