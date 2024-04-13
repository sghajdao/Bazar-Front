import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastProductsComponent } from './last-products.component';

const routes: Routes = [
  {
    path: '',
    component: LastProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastProductsRoutingModule { }
