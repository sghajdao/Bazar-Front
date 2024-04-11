import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStoreComponent } from './create-store.component';
import { storeGuard } from 'src/app/guards/store.guard';
import { authGuard } from 'src/app/guards/auth.guard';
import { verifiedEmailGuard } from 'src/app/guards/verified-email.guard';

const routes: Routes = [
  {
    path: '',
    component: CreateStoreComponent,
    canActivate: [storeGuard, authGuard, verifiedEmailGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateStoreRoutingModule { }
