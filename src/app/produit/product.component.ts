import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './model/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  productForm: FormGroup;
  operation = 'add';
  selectedProduct: Product;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.initProduct();
    // this.loadProducts();
    this.products = this.activatedRoute.snapshot.data.products;
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantite: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(500)])],
      prixUnitaire: ['', Validators.compose([Validators.required, Validators.min(0.1)])]
    });
  }

  initProduct() {
    this.selectedProduct = new Product();
    this.createForm();
  }

  loadProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log('An error was occured.');
      },
      () => {
        console.log('loading products was done.');
      }
    );
  }

  addProduct() {
    const p = this.productForm.value;
    this.productService.add(p).subscribe(
      res => {
        this.initProduct();
        this.loadProducts();
      }
    );
  }

  updateProduct() {
    this.productService.update(this.selectedProduct).subscribe(
      res => {
        this.initProduct();
        this.loadProducts();
      }
    );
  }

  deleteProduct() {
    const id = this.selectedProduct.id;
    this.productService.delete(id).subscribe(
      res => {
        this.selectedProduct = new Product();
        this.loadProducts();
      }
    );
  }
}
