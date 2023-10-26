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
import { ChartModule } from 'angular-highcharts';
import { SalseChartComponent } from './salse-chart/salse-chart.component';

@NgModule({
  declarations: [
    ProfileComponent,
    StatisticsComponent,
    NavbarComponent,
    SalseChartComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ChartModule,
    MatSlideToggleModule,
    MatButtonModule, MatMenuModule,
    MatCardModule
  ]
})
export class ProfileModule { }
