import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyStoreEmailRoutingModule } from './verify-store-email-routing.module';
import { VerifyStoreEmailComponent } from './verify-store-email.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';


@NgModule({
  declarations: [
    VerifyStoreEmailComponent
  ],
  imports: [
    CommonModule,
    VerifyStoreEmailRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class VerifyStoreEmailModule { }
