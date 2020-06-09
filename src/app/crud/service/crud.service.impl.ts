/*
import {CrudService} from './crud.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class CrudServiceImpl implements CrudService{

  url: string;

  constructor(private http: HttpClient){

  getAll(): Observable<any>{
    return this.http.get(environment.USER_CRUD_URL);
  }

  add(entity): Observable<any>{
    return this.http.post(environment.USER_CRUD_URL, entity);
  }

  update(entity): Observable<any>{
    return this.http.put(environment.USER_CRUD_URL, entity);
  }

  delete(id): Observable<any>{
    return this.http.delete(environment.USER_CRUD_URL + `/${id}`);
  }

  addAll(list): Observable<any>{
    return this.http.post(environment.USER_CRUD_URL+ '/all', list);
  }

}
*/
