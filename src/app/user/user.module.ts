import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import {CommonModule} from '@angular/common';
import {CrudModule} from '../crud/crud.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudModule,
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule{

}
