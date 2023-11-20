import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { LeftCardsComponent } from './left-cards/left-cards.component';
import { RightCardsComponent } from './right-cards/right-cards.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    NewProductComponent,
    LeftCardsComponent,
    RightCardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewProductRoutingModule,
    UserNavbarModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSelectModule, MatChipsModule, MatIconModule,
    MatButtonModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class NewProductModule { }
