import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarUserModule } from '../user/navbar-user/navbar-user.module';
import { DigitalComponent } from './digital/digital.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FoodComponent } from './food/food.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HealthComponent } from './health/health.component';
import { HouseholdComponent } from './household/household.component';
import { MediaComponent } from './media/media.component';
import { PetComponent } from './pet/pet.component';
import { OfficeComponent } from './office/office.component';


@NgModule({
  declarations: [
    HomeComponent,
    DigitalComponent,
    CosmeticsComponent,
    FoodComponent,
    FurnitureComponent,
    HealthComponent,
    HouseholdComponent,
    MediaComponent,
    PetComponent,
    OfficeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarUserModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
