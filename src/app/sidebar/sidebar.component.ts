import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Store} from '@ngrx/store';
import {Principal} from '../shared/principal.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private principal: Principal;

  constructor(private appService: AppService,
              private store: Store) { }

  ngOnInit(): void {
    /*this.store.select( state => {
      this.principal = state;
    });*/

    this.store.select('principal').subscribe( principal => {
      this.principal = principal;
    });
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
        if (item.authority === 'ROLE-USER'){
          hasRole = true;
        }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE-ADMIN'){
        hasRole = true;
      }
    });
    return hasRole;
  }

}
