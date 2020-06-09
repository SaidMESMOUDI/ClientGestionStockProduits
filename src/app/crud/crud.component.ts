import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from './service/crud.service';
import {FormGroup} from '@angular/forms';
import {DataModel} from './model/data.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  @Input()
  dataModelList: DataModel[];

  crudType = 'sample';

  constructor() {
  }

  ngOnInit() {
  }

  dataChanged($event) {
    this.data = this.data.concat($event);
  }

}
