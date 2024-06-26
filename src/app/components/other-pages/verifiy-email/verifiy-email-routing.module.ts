import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiyEmailComponent } from './verifiy-email.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: VerifiyEmailComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifiyEmailRoutingModule { }
