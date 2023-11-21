import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { merchantGuard } from './guards/merchant.guard';
import { storeGuard } from './guards/store.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren:()=>import("./components/visitor/home/home.module").then(m=>m.HomeModule),
    // canActivate: [authGuard],
  },
  {
    path: "login",
    loadChildren:()=>import("./components/authentication/login/login.module").then(m=>m.LoginModule),
  },
  {
    path: "register",
    loadChildren:()=>import("./components/authentication/register/register.module").then(m=>m.RegisterModule)
  },
  {
    path: "profile",
    loadChildren:()=>import("./components/user/profile/profile.module").then(m=>m.ProfileModule),
    canActivate: [authGuard],
  },
  {
    path: "new-product",
    loadChildren:()=>import("./components/user/new-product/new-product.module").then(m=>m.NewProductModule),
    canActivate: [authGuard, merchantGuard],
  },
  {
    path: "store",
    loadChildren:()=>import("./components/user/user-products/user-products.module").then(m=>m.UserProductsModule),
    canActivate: [authGuard, merchantGuard],
  },
  {
    path: "newStore",
    loadChildren:()=>import("./components/user/store-creation/store-creation.module").then(m=>m.StoreCreationModule),
    canActivate: [authGuard, storeGuard],
  },
  {
    path: "product",
    loadChildren:()=>import("./components/user/product/product.module").then(m=>m.ProductModule),
    canActivate: [authGuard],
  },
  {
    path: "products/search",
    loadChildren:()=>import("./components/visitor/product-search/product-search.module").then(m=>m.ProductSearchModule),
  },
  {
    path: "product/visitor",
    loadChildren:()=>import("./components/visitor/product-visitor/product-visitor.module").then(m=>m.ProductVisitorModule),
  },
  {
    path: "settings/store",
    loadChildren:()=>import("./components/user/store-settings/store-settings.module").then(m=>m.StoreSettingsModule),
    canActivate: [authGuard, merchantGuard],
  },
  {
    path: '**',
    loadChildren:()=>import("./components/not-found/not-found.module").then(m=>m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
