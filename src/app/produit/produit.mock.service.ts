import {Produit} from '../shared/Produit';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService{

   private PRODUITS: Produit[] = [];

  constructor(){
    const p1: Produit = new  Produit(1, 'Livre', 50, 20);
    const p2: Produit = new  Produit(2, 'Cahier', 200, 5.25);
    const p3: Produit = new  Produit(3, 'Stylo', 500, 2.10);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }

  public getProduits(): Produit[] {
    return  this.PRODUITS;
  }
}
