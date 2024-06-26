import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './components/visitor/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/home/home.module';
import { NavbarUserModule } from './components/navbar-user/navbar-user.module';
import { StorePageModule } from './components/store/store-page/store-page.module';
import { EditStoreModule } from './components/store/edit-store/edit-store.module';
import { ModalsModule } from './components/modals/modals.module';
import { CreateProductModule } from './components/products/create-product/create-product.module';
import { ProductPageModule } from './components/products/product-page/product-page.module';
import { SearchModule } from './components/products/search/search.module';
import { VerifiyEmailModule } from './components/other-pages/verifiy-email/verifiy-email.module';
import { NotFoundModule } from './components/other-pages/not-found/not-found.module';
import { LastProductsModule } from './components/products/last-products/last-products.module';
import { SellerDashboardModule } from './components/dashboards/seller-dashboard/seller-dashboard.module';
import { TopRatedStoreModule } from './components/store/top-rated-store/top-rated-store.module';
import { VerifyStoreEmailModule } from './components/other-pages/verify-store-email/verify-store-email.module';
import { AdminDashboardModule } from './components/dashboards/admin-dashboard/admin-dashboard.module';
import { BestSellerComponent } from './components/products/best-seller/best-seller.component';
import { BestSellerModule } from './components/products/best-seller/best-seller.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    NavbarUserModule,
    StorePageModule,
    EditStoreModule,
    ModalsModule,
    CreateProductModule,
    ProductPageModule,
    SearchModule,
    VerifiyEmailModule,
    NotFoundModule,
    LastProductsModule,
    SellerDashboardModule,
    TopRatedStoreModule,
    VerifyStoreEmailModule,
    AdminDashboardModule,
    BestSellerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
