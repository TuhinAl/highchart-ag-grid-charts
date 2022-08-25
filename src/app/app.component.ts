import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie chart',
    },
  };


  // https://stackblitz.com/edit/highcharts-angular-stacked-bar-uundhy?file=angular.json,package.json,src%2Fapp%2Fapp.component.ts
  // https://stackblitz.com/edit/highcharts-angular-basic-line-9l5eqo?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.css,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.ts
  // https://stackblitz.com/edit/angular14-standaone-components-highcharts-kmudrt?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.css,src%2Fstyles.css,angular.json,package.json,src%2Findex.html
  // https://stackblitz.com/edit/highcharts-angular-demo?file=src%2Fapp%2Fapp.component.css,src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fhighcharts.service.ts


  opened = true;

  config = {
    chart: { type: 'line', height: 250 },

    title: { text: 'Real time Weather' },
    series: [
      {
        name: 'Temperature',
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0,
          17.8,
        ],
        color: 'black',
        tooltip: { valueSuffix: '°C' },
      },
      {
        name: 'Humidity',
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
        ],
      },
    ],

    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
  };


}
