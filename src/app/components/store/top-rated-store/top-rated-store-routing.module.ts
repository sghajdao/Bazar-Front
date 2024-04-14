import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedStoreComponent } from './top-rated-store.component';

const routes: Routes = [
  {
    path: '',
    component: TopRatedStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRatedStoreRoutingModule { }
