import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import { UploadComponent } from './crud/upload/upload.component';



@NgModule({
  declarations: [
    CrudComponent,
    SampleComponent,
    UploadComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
