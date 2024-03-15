import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './store-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: StorePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorePageRoutingModule { }
