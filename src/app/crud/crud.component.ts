import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from './service/crud.service';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ActivatedRoute} from '@angular/router';
import {DataModel} from './model/data.model';
import {Principal} from '../authentication/shared/model/principal.model';
import {Store} from '@ngrx/store';
import {PrincipalState} from '../authentication/shared/principal.state';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  private principal: Principal;

  @Input() title: string;
  @Input() data: any;
  @Input() service: CrudService;
  @Input() initForm: FormGroup;
  @Input() initItem: any;
  crudForm: FormGroup;
  operation: string = 'add';
  selectedItem: any;
  @Input() dataModelList: DataModel[];
  crudType: string = 'sample';

  dataChanged($event) {
    this.data = this.data.concat($event);
  }

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private store: Store<PrincipalState>) {
    this.createForm();
  }

  ngOnInit(): void {
    this.init();
    this.data = this.activatedRoute.snapshot.data.products;
  }

  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.formBuilder.group({});

    /*if (!this.initForm) {
      this.initForm = this.formBuilder.group({});
    } else {
      this.crudForm = this.initForm;
    }*/
  }

  init() {
    this.selectedItem = this.initItem;
    this.createForm();
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.log('An error was occured.');
      },
      () => {
        console.log('loading data was done.');
      }
    );
  }

  add() {
    const p = this.initForm.value;
    this.service.add(p).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  update() {
    this.service.update(this.selectedItem).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  delete() {
    const id = this.selectedItem.id;
    this.service.delete(id).subscribe(
      res => {
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
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
