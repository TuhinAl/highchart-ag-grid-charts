import { Injectable } from '@angular/core';
import * as highcharts from 'highcharts';

@Injectable()
export class ChartService {

  redraw(el, cfg) {
    highcharts.chart(el, cfg);
  }
  // constructor() { }
}
