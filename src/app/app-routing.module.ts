import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "login",
    loadChildren:()=>import("./components/login/login.module").then(m=>m.LoginModule),
  },
  {
    path: "register",
    loadChildren:()=>import("./components/register/register.module").then(m=>m.RegisterModule)
  },
  {
    path: "",
    loadChildren:()=>import("./components/home/home.module").then(m=>m.HomeModule),
    // canActivate: [authGuard],
  },
  {
    path: "profile",
    loadChildren:()=>import("./components/profile/profile.module").then(m=>m.ProfileModule),
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
