import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiyEmailComponent } from './verifiy-email.component';

const routes: Routes = [
  {
    path: '',
    component: VerifiyEmailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifiyEmailRoutingModule { }
