import { Component, OnInit } from '@angular/core';
import * as agCharts from 'ag-charts-community';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   options: AgChartOptions = {
    autoSize: true,
    data: this.getData(),
    title: {
      text: 'Patient Visit By Department',
      fontSize: 18,
    },
    subtitle: {
      text: 'Subtitle',
    },
    series: [
      {
        type: 'pie',
        labelKey: 'type',
        fillOpacity: 0.9,
        strokeWidth: 0,
        angleKey: '2018/19',
        label: {
          enabled: false,
        },
        title: {
          text: '',
        },
        innerRadiusOffset: -70,
      },
    ],
  };


   chart = agCharts.AgChart.create(this.options);

    getData(): any[] {
    return [
      { type: 'Medicine', '2018/19': 40 },
      { type: 'Cardiology', '2018/19': 30 },
      { type: 'Emergency', '2018/19': 15 },
      { type: 'Gynaecology', '2018/19': 10 },
      { type: 'ENT', '2018/19': 5 },
    ];
  }



}
