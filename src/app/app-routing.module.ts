import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitResolver} from './produit/produit.resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, outlet: 'contentOutlet'},
      { path: 'produit', component: ProduitComponent , resolve: {produits: ProduitResolver}, outlet: 'contentOutlet' },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
/*  { path: 'user', component: UsersComponent },
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
  providers: [ProduitResolver],
  declarations: [],
})
export class AppRoutingModule { }
