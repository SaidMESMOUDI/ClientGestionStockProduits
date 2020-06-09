import {Component, OnInit} from '@angular/core';
import {AppService} from './authentication/shared/service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClientGestionStockProduits';

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.appService.authenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
      //this.router.navigateByUrl('/home/(contentOutlet:produit)');
    }
  }

}

