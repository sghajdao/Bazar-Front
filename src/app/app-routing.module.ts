import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren:()=>import("./components/home/home.module").then(m=>m.HomeModule),
  },
  {
    path: "auth",
    loadChildren:()=>import("./components/visitor/auth/auth.module").then(m=>m.AuthModule),
  },
  {
    path: "new-store",
    loadChildren:()=>import("./components/store/create-store/create-store.module").then(m=>m.CreateStoreModule),
  },
  {
    path: "store",
    loadChildren:()=>import("./components/store/store-page/store-page.module").then(m=>m.StorePageModule),
  },
  {
    path: "edit-store",
    loadChildren:()=>import("./components/store/edit-store/edit-store.module").then(m=>m.EditStoreModule),
  },
  {
    path: "new-product",
    loadChildren:()=>import("./components/products/create-product/create-product.module").then(m=>m.CreateProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
