import {Component, OnInit} from '@angular/core';
import {ProductService} from '../produit/service/product.service';
import {UserService} from '../user/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productsData = {
    labels: [],
    datasets: []
  };

  usersData = {
    labels: [],
    datasets: []
  };

  constructor(private productService: ProductService,
              private userService: UserService) {
  }

  ngOnInit() {
    const datasetsQuantite = {
      label: "Quantité",
      data: [],
      backgroundColor: 'rgba(55, 63, 179, 0.7)',
      borderColor: 'rgba(70, 84, 235, 1)'
    };

    const datasetsPrixUnitaire = {
      label: "Prix Unitaire",
      data: [],
      backgroundColor: 'rgba(0, 204, 0, 0.7)',
      borderColor: 'rgb(0, 128, 32)'
    };

    this.productService.getAll().subscribe(list=> list.forEach(product => {
      this.productsData.labels.push(product.ref);
      datasetsQuantite.data.push(product.quantite);
      datasetsPrixUnitaire.data.push(product.prixUnitaire);
    }));

    this.productsData.datasets.push(datasetsQuantite);
    this.productsData.datasets.push(datasetsPrixUnitaire);

    const datasetsUser = {
      label: "Roles",
      data: [],
      backgroundColor: 'rgba(176, 0, 255, 0.6)',
      borderColor: 'rgb(176, 0, 255)'
    };

    this.usersData.datasets.push(datasetsUser);

    this.usersData.labels.push('ROLE_ADMIN');
    this.usersData.labels.push('ROLE_USER');

    this.userService.getAll().subscribe(list => {
      let adminLength = 0;

      list.forEach(user => user.roles.forEach(role => {
        if(role.name == 'ROLE_ADMIN'){
          adminLength++;
        }
      }));

      datasetsUser.data.push(adminLength);

      let userLength = 0;
      list.forEach(user => user.roles.forEach(role => {
        if(role.name == 'ROLE_USER'){
          userLength++;
        }
      }));

      datasetsUser.data.push(userLength);
    });
  }


}
