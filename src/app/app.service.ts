import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';
//import 'rxjs/add/operator/finally';
import {CookieService} from 'ngx-cookie-service';
import {Store} from '@ngrx/store';
import {PrincipalState} from './shared/principal.state';
import {SAVE_PRINCIPAL} from './shared/save.principal.action';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated: boolean = false;
  response: Object;

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService,
              private store: Store<PrincipalState>) {
  }

  authenticate(credentials, callback) {
    /*this.authenticated = credentials && credentials.username == 'user' && credentials.password == 'userpass';*/
    /*if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      this.httpClient.get(API_URLS.USER_URL).subscribe(
        response => {
                            if(response && response['name']){
                              this.authenticated = true;
                            }else {
                              this.authenticated = false;
                            }
          return callback && callback();
        });
    }else {
      this.authenticated = false;
    }*/

    if (!credentials) {
      this.authenticated = false;
    } else {
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      this.httpClient.get(API_URLS.USER_URL).subscribe(
        response => {
          if (response && response['name']) {
            this.authenticated = true;
            //console.log(response);
            /*response = {
              ...{principal: null},
            ...response
            };*/
            response = Object.assign({principal: null}, response);

            this.store.dispatch({
              type: SAVE_PRINCIPAL,
              payload: response
            });
          } else {
            this.authenticated = false;
          }
          return callback && callback();
        });
    }

  }

  logout(callback) {
    this.authenticated = false;
    return callback && callback();
  }


}
