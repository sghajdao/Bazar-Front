import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchRoutingModule } from './product-search-routing.module';
import { ProductSearchComponent } from './product-search.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserNavbarModule } from '../../user/user-navbar/user-navbar.module';
import { VisitorNavbarModule } from '../visitor-navbar/visitor-navbar.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ProductSearchComponent,
  ],
  imports: [
    CommonModule,
    ProductSearchRoutingModule,
    UserNavbarModule,
    VisitorNavbarModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatFormFieldModule, MatInputModule,
    MatRadioModule, MatDatepickerModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ]
})
export class ProductSearchModule { }
