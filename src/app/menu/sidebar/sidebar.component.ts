import {Component, OnInit} from '@angular/core';
import {AppService} from '../../authentication/shared/service/app.service';
import {Store} from '@ngrx/store';
import {Principal} from '../../authentication/shared/model/principal.model';
import {PrincipalState} from '../../authentication/shared/principal.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private principal: Principal;

  constructor(private appService: AppService,
              private store: Store<PrincipalState>) { }

  ngOnInit(): void {
    this.store.select('principal').subscribe( principal => {
      //console.log(principal);
      this.principal = principal;
    });
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
        if (item.authority === 'ROLE_USER'){
          hasRole = true;
        }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN'){
        hasRole = true;
      }
    });
    return hasRole;
  }

}
