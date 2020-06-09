import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SampleComponent} from './sample/sample.component';
import {UploadComponent} from './upload/upload.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CrudComponent} from './crud.component';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CrudComponent,
    SampleComponent,
    UploadComponent
  ],
  exports: [
    CrudComponent,
    SampleComponent,
    UploadComponent
  ]
})
export class CrudModule {

}
