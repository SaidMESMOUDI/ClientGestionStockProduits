import {Product} from '../model/product.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_URLS} from '../../config/api.url.config';
import {CrudService} from '../../crud/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements CrudService{


  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(API_URLS.PRODUCTS_URL);
  }

  add(product: Product): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUCTS_URL, product);
  }

  update(product: Product): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUCTS_URL, product);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUCTS_URL + `/${id}`);
  }

  addAll(list): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUCTS_URL, list);
  }
}
