import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifiyEmailRoutingModule } from './verifiy-email-routing.module';
import { NavbarUserModule } from '../../navbar-user/navbar-user.module';
import { VerifiyEmailComponent } from './verifiy-email.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerifiyEmailComponent
  ],
  imports: [
    CommonModule,
    VerifiyEmailRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class VerifiyEmailModule { }
