import {Product} from '../model/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService {

  private PRODUCTS: Product[] = [];

  constructor() {
    const p1: Product = new Product(1, 'Livre', 50, 20);
    const p2: Product = new Product(2, 'Cahier', 200, 5.25);
    const p3: Product = new Product(3, 'Stylo', 500, 2.10);

    this.PRODUCTS.push(p1);
    this.PRODUCTS.push(p2);
    this.PRODUCTS.push(p3);
  }

  public getProducts(): Product[] {
    return this.PRODUCTS;
  }
}
