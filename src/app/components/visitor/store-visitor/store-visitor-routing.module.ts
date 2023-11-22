import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreVisitorComponent } from './store-visitor.component';

const routes: Routes = [
  {
    path: ':id',
    component: StoreVisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreVisitorRoutingModule { }
