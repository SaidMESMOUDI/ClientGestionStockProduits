import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import {ProduitService} from './produit/produit.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {XhrInterceptor} from './xhr.interceptor';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent, ProduitComponent, NavbarComponent,
    ContentComponent, SidebarComponent, DashboardComponent,
    LoginComponent, HomeComponent, UserComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,
    FormsModule, HttpClientModule
  ],
  providers: [
    ProduitMockService, ProduitService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
