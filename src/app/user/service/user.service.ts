import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/service/crud.service';
import {Observable} from 'rxjs';
import {API_URLS} from '../../config/api.url.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CrudService{
  url = '/crud_user';

  constructor(private httpClient: HttpClient){

  }

  getAll(): Observable<any> {
    return this.httpClient.get(API_URLS.USER_CRUD_URL);
  }

  update(user): Observable<any> {
    return this.httpClient.put(API_URLS.USER_CRUD_URL, user);
  }

  add(user): Observable<any> {
    return this.httpClient.post(API_URLS.USER_CRUD_URL, user);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(API_URLS.USER_CRUD_URL, id);
  }

  addAll(usersList): Observable<any> {
    return this.httpClient.post(API_URLS.USER_CRUD_URL, usersList);
  }

}
