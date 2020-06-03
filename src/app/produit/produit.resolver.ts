import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProduitService} from './produit.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProduitResolver implements Resolve<any> {

  constructor(private produitService: ProduitService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.produitService.getProduits();
  }

}
