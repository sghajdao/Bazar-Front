import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren:()=>import("./components/home/home.module").then(m=>m.HomeModule),
    // canActivate: [authGuard],
  },
  {
    path: "login",
    loadChildren:()=>import("./components/login/login.module").then(m=>m.LoginModule),
  },
  {
    path: "register",
    loadChildren:()=>import("./components/register/register.module").then(m=>m.RegisterModule)
  },
  {
    path: "profile",
    loadChildren:()=>import("./components/profile/profile.module").then(m=>m.ProfileModule),
    canActivate: [authGuard],
  },
  {
    path: "new-product",
    loadChildren:()=>import("./components/new-product/new-product.module").then(m=>m.NewProductModule),
    canActivate: [authGuard],
  },
  {
    path: "products",
    loadChildren:()=>import("./components/user-products/user-products.module").then(m=>m.UserProductsModule),
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
