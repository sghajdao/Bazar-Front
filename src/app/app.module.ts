import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModalsModule } from './components/modals/modals.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotFoundModule } from './components/not-found/not-found.module';
import { LoginModule } from './components/authentication/login/login.module';
import { RegisterModule } from './components/authentication/register/register.module';
import { HomeModule } from './components/visitor/home/home.module';
import { ProfileModule } from './components/user/profile/profile.module';
import { NewProductModule } from './components/user/new-product/new-product.module';
import { UserNavbarModule } from './components/user/user-navbar/user-navbar.module';
import { UserProductsModule } from './components/user/user-products/user-products.module';
import { StoreCreationModule } from './components/user/store-creation/store-creation.module';
import { ProductModule } from './components/user/product/product.module';
import { ProductSearchModule } from './components/visitor/product-search/product-search.module';
import { ProductVisitorModule } from './components/visitor/product-visitor/product-visitor.module';
import { StoreSettingsModule } from './components/user/store-settings/store-settings.module';
import { VisitorNavbarModule } from './components/visitor/visitor-navbar/visitor-navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
    SocialLoginModule,
    HomeModule,
    ProfileModule,
    NewProductModule,
    UserNavbarModule,
    UserProductsModule,
    StoreCreationModule,
    ProductModule,
    ProductSearchModule,
    ProductVisitorModule,
    ModalsModule,
    NotFoundModule,
    BrowserAnimationsModule,
    StoreSettingsModule,
    VisitorNavbarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '956881088059-j4a0vd8vji5t7h5od9smm1tft4hp966b.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
