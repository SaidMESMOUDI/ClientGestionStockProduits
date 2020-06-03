import { Component, OnInit } from '@angular/core';
import {ProduitService} from './produit.service';
import {Produit} from '../shared/Produit';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  operation = 'add';
  selectedProduit: Produit;

  constructor(private produitService: ProduitService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.createForm();
  }
  ngOnInit(): void {
    this.initProduit();
    // this.loadProduits();
    this.produits = this.activatedRoute.snapshot.data.produits;
  }

  createForm(){
    this.produitForm = this.formBuilder.group({
      ref: ['', Validators.required],
      quantite: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(500)]) ],
      prixUnitaire: ['', Validators.compose([Validators.required, Validators.min(0.1)]) ]
    });
  }
  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }
  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => {this.produits = data; },
      error => {console.log('An error was occured.'); },
      () => {console.log('loading produits was done.'); }
    );
  }
  addProduit() {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  updateProduit(){
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  deleteProduit() {
    const reference = this.selectedProduit.ref;
    this.produitService.deleteProduit(reference).subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduits();
      }
    );
  }
}
