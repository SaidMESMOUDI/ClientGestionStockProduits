import {Produit} from '../shared/Produit';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { API_URLS } from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class ProduitService{

  private produits: Produit[] = [];

  constructor(private httpClient: HttpClient){}

  public getProduits(): Observable<any> {
    return this.httpClient.get(API_URLS.PRODUITS_URL);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUITS_URL, produit);
  }

  updateProduit(produit: Produit): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUITS_URL, produit);
  }

  deleteProduit(ref: string): Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUITS_URL + `/${ref}`);
  }
}
