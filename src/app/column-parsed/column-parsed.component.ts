import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-parsed',
  templateUrl: './column-parsed.component.html',
  styleUrls: ['./column-parsed.component.scss']
})
export class ColumnParsedComponent {

  Highcharts: typeof Highcharts = Highcharts;

  getText() {
    return 'some text';
  }

  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'xy',
      style: {
        fontFamily: 'Segoe UI',
      },
      height: 300,
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        events: {
          legendItemClick: () => {
            return false;
          },
        },
        states: {
          inactive: {
            opacity: 1,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: this.formatterFunction,
        },
        cursor: 'pointer',
      },
      column: {
        point: {
          events: {
            click: (event) => {
              // click to open drilldown
            },
          },
        },
      },
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: 'Weekly Investigation',
    },
    credits: {
      enabled: false,
    },
    xAxis: [
      {
        categories: ['2021', '2022', '2023', '2024'],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        labels: {
          style: {
            color: '#666666',
          },
        },
        title: {
          text: '',
        },
        endOnTick: true,
      },
    ],
    tooltip: {
      shared: false,
    },
    series: [
      {
        name: 'Radiology',
        data: [85, 55, 30, 34],
        color: '#cc33ff',
        pointPlacement: 0.05,
        zIndex: 1,
        type: 'column',
      },
      {
        name: 'Pathology',
        data: [70, 68, 12, 65],
        color: '#ff33cc',
        pointPlacement: 0.03,
        zIndex: 2,
        type: 'column',
      },
    ],
  };
  formatterFunction(this): string {
    return this.y;
  }

  formatNumber(numberToFormat: Number): string {
    return numberToFormat.toString() + 'M';
  }

}
