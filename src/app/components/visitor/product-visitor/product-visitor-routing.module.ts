import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductVisitorComponent } from './product-visitor.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductVisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductVisitorRoutingModule { }
