import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CrudModule} from '../crud/crud.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudModule
  ]
})
export class ProductModule { }
