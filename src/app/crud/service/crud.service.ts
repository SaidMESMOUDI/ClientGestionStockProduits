import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

/*@Injectable()
export class CrudService {


}*/


export interface CrudService {
  getAll(): Observable<any>;
  add(entity): Observable<any>;
  update(entity): Observable<any>;
  delete(id): Observable<any>;
  addAll(list): Observable<any>;

}
