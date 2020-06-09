import {Product} from '../model/product.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {API_URLS} from '../../config/api.url.config';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService implements CrudService {

  private PRODUCTS: Product[] = [];

  constructor(private httpClient: HttpClient) {
    const p1: Product = new Product(1, 'Livre', 50, 20);
    const p2: Product = new Product(2, 'Cahier', 200, 5.25);
    const p3: Product = new Product(3, 'Stylo', 500, 2.10);

    this.PRODUCTS.push(p1);
    this.PRODUCTS.push(p2);
    this.PRODUCTS.push(p3);
  }

  public getAll(): Observable<any> {
    return of(this.PRODUCTS);
  }

  add(product: Product): Observable<any> {
    return of("Success");
  }

  update(product: Product): Observable<any> {
    return of("Success");
  }

  delete(id: number): Observable<any> {
    return of("Success");
  }

  addAll(list): Observable<any> {
    return of("Success");
  }
}
