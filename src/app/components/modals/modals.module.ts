import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreInfoComponent } from './store-info/store-info.component';
import { MatIconModule } from '@angular/material/icon';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';



@NgModule({
  declarations: [
    StoreInfoComponent,
    SessionExpiredComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule,
    MatIconModule
  ]
})
export class ModalsModule { }
