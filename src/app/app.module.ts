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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
