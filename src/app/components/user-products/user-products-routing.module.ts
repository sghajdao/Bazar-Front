import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProductsComponent } from './user-products.component';

const routes: Routes = [
  {
    path: ":id",
    component: UserProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProductsRoutingModule { }
