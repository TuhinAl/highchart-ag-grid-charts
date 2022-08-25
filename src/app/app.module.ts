import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HighchartsChartModule} from "highcharts-angular";
import {AgChartsAngularModule} from "ag-charts-angular";
import {AgBarChartComponent} from "./ag-bar-chart/ag-bar-chart.component";
import {ColumnParsedComponent} from './column-parsed/column-parsed.component';
import {StackedBarChartComponent} from './stacked-bar-chart/stacked-bar-chart.component';
import {FormsModule} from "@angular/forms";
import {HighChartsService} from "./stacked-bar-chart/high-charts.service";
import {PatientTimelineComponent} from './patient-timeline/patient-timeline.component';
import { ChartComponent } from './chart/chart.component';
import { PanelComponent } from './panel/panel.component';
import {HelloComponent} from "./hello.component";
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AgBarChartComponent,
    ColumnParsedComponent,
    StackedBarChartComponent,
    PatientTimelineComponent,
    ChartComponent,
    PanelComponent,
    HelloComponent,
    SplineChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    AgChartsAngularModule,
    FormsModule

  ],
  providers: [HighChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
