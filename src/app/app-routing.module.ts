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
  },
  {
    path: "product",
    loadChildren:()=>import("./components/products/product-page/product-page.module").then(m=>m.ProductPageModule),
  },
  {
    path: "edit-product",
    loadChildren:()=>import("./components/products/edit-product/edit-product.module").then(m=>m.EditProductModule),
  },
  {
    path: "products-search",
    loadChildren:()=>import("./components/products/search/search.module").then(m=>m.SearchModule),
  },
  {
    path: "verify-email",
    loadChildren:()=>import("./components/other-pages/verifiy-email/verifiy-email.module").then(m=>m.VerifiyEmailModule),
  },
  {
    path: "not-found",
    loadChildren:()=>import("./components/other-pages/not-found/not-found.module").then(m=>m.NotFoundModule),
  },
  {
    path: "recent-products",
    loadChildren:()=>import("./components/products/last-products/last-products.module").then(m=>m.LastProductsModule),
  },
  {
    path: "seller-dashboard",
    loadChildren:()=>import("./components/dashboards/seller-dashboard/seller-dashboard.module").then(m=>m.SellerDashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
