import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyStoreEmailComponent } from './verify-store-email.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { sellerGuard } from 'src/app/guards/seller.guard';

const routes: Routes = [
  {
    path: '',
    component: VerifyStoreEmailComponent,
    canActivate: [authGuard, sellerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyStoreEmailRoutingModule { }
