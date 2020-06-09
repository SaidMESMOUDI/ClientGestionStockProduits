import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductMockService} from './produit/service/product.mock.service';
import {ProductService} from './produit/service/product.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {XhrInterceptor} from './authentication/xhr.interceptor';
import {CookieService} from 'ngx-cookie-service';
import {StoreModule} from '@ngrx/store';
import {principalReducer} from './authentication/shared/principal.reducer';
import {UserModule} from './user/user.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ProductModule} from './produit/product.module';
import {AppMenuModule} from './menu/app.menu.module';
import {UserService} from './user/service/user.service';
import { CrudComponent } from './crud/crud.component';
import {CrudModule} from './crud/crud.module';
//import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
    AuthenticationModule,
    DashboardModule,
    AppMenuModule,
    ProductModule,
    UserModule,
    CrudModule,

  ],
  providers: [
    ProductMockService, ProductService, UserService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
