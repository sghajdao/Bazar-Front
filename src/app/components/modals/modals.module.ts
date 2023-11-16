import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageComponent } from './images/image.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ImageComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule
  ]
})
export class ModalsModule { }
