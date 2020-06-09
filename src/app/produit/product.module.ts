import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
