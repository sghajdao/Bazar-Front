import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ProfileComponent,
    StatisticsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSlideToggleModule,
    MatButtonModule, MatMenuModule,
    MatCardModule
  ]
})
export class ProfileModule { }
