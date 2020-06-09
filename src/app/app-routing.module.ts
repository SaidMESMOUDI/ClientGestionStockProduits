import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductComponent} from './produit/product.component';
import {ProductResolver} from './produit/service/product.resolver';
import {LoginComponent} from './authentication/login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, outlet: 'homeOutlet'},
      { path: 'product', component: ProductComponent , resolve: {products: ProductResolver}, outlet: 'homeOutlet' },
      { path: 'user', component: UserComponent, outlet: 'homeOutlet' }
    ]
  }
];
/*
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent }*/

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
      ),
    CommonModule],
  exports: [RouterModule],
  providers: [ProductResolver],
  declarations: [],
})
export class AppRoutingModule { }
