import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './model/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DataModel} from '../crud/model/data.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  product: Product = new Product();
  productsModel: DataModel[];
  productForm: FormGroup;
  operation = 'add';
  selectedProduct: Product;

  constructor(public productService: ProductService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data.products;
    this.createForm();
    this.productsModel = [
      new DataModel('id', 'ID', 'number',true,[]),
      new DataModel('ref', 'Référence', 'string',false,[]),
      new DataModel('quantite', 'Quantité', 'number',false,[]),
      new DataModel('prixUnitaire', 'Prix Unitaire', 'number',false,[])

    ];
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantite: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(500)])],
      prixUnitaire: ['', Validators.compose([Validators.required, Validators.min(0.1)])]
    });
  }


}
