import * as Highcharts from 'highcharts';
import { Injectable } from '@angular/core';
@Injectable()
export class HighChartsService {
  constructor() {}

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }
}
