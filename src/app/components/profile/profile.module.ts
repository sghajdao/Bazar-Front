import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartModule } from 'angular-highcharts';
import { SalseChartComponent } from './salse-chart/salse-chart.component';
import { UserNavbarModule } from '../user-navbar/user-navbar.module';

@NgModule({
  declarations: [
    ProfileComponent,
    StatisticsComponent,
    SalseChartComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    UserNavbarModule,
    ChartModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProfileModule { }
