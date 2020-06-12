import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ChartModule} from 'angular2-chartjs';
import {MyChartComponent} from './my-chart/my-chart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MyChartComponent
  ],
    imports: [
        CommonModule,
        ChartModule
    ],
  exports: [
    DashboardComponent,
    MyChartComponent
  ]
})
export class DashboardModule { }
