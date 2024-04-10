import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DigitalComponent } from './digital/digital.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { FoodComponent } from './food/food.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HealthComponent } from './health/health.component';
import { HouseholdComponent } from './household/household.component';
import { MediaComponent } from './media/media.component';
import { PetComponent } from './pet/pet.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "digital",
    component: DigitalComponent
  },
  {
    path: "cosmetics",
    component: CosmeticsComponent
  },
  {
    path: "food",
    component: FoodComponent
  },
  {
    path: "furniture",
    component: FurnitureComponent
  },
  {
    path: "health",
    component: HealthComponent
  },
  {
    path: "household",
    component: HouseholdComponent
  },
  {
    path: "media",
    component: MediaComponent
  },
  {
    path: "pet",
    component: PetComponent
  },
  {
    path: "office",
    component: OfficeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
