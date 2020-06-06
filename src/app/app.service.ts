import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';
//import 'rxjs/add/operator/finally';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated: boolean = false;

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) { }

  authenticate(credentials, callback){
    /*this.authenticated = credentials && credentials.username == 'user' && credentials.password == 'userpass';*/
    if(credentials) {
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
    }
  }

  logout(callback){
    /*this.httpClient.post('logout', {}).subscribe(() => {
      this.authenticated = false;
      return callback && callback();
    });*/
    return callback && callback();
  }


}
