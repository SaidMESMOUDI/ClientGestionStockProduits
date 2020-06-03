import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitResolver} from './produit/produit.resolver';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'produit', component: ProduitComponent , resolve: {produits: ProduitResolver} },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
/*  { path: 'user', component: UsersComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent }*/

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
      ),
    CommonModule],
  exports: [RouterModule],
  providers: [ProduitResolver],
  declarations: [],
})
export class AppRoutingModule { }
