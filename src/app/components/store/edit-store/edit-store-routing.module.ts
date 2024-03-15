import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStoreComponent } from './edit-store.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { sellerGuard } from 'src/app/guards/seller.guard';

const routes: Routes = [
  {
    path: ':id',
    component: EditStoreComponent,
    canActivate: [authGuard, sellerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditStoreRoutingModule { }
