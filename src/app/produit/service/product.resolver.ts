import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor(private productService: ProductService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.productService.getAll();
  }

}
