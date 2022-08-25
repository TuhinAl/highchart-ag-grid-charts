import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-ag-bar-chart',
  templateUrl: './ag-bar-chart.component.html',
  styleUrls: ['./ag-bar-chart.component.scss']
})
export class AgBarChartComponent implements OnInit {


  public options: AgChartOptions;

  beverageSpending = [
    {
      beverage: 'Coffee',
      Q1: 450
    },
    {
      beverage: 'Tea',
      Q1: 270
    },
    {
      beverage: 'Apple',
      Q4: 200,
    },  {
      beverage: 'Fruits',
      Q4: 200,
    },  {
      beverage: 'Others',
      Q4: 200,
    },
  ];
  constructor() {
    this.options = {
      data: this.beverageSpending,
      title: {
        text: 'Testing',
      },
      subtitle: {
        text: 'per quarter',
      },
      series: [
        { type: 'column', xKey: 'beverage', yKey: 'Q1', stacked: true },
        { type: 'column', xKey: 'beverage', yKey: 'Q2', stacked: true },
        { type: 'column', xKey: 'beverage', yKey: 'Q3', stacked: true },
        { type: 'column', xKey: 'beverage', yKey: 'Q3', stacked: true },
        { type: 'column', xKey: 'beverage', yKey: 'Q3', stacked: true },
        { type: 'column', xKey: 'beverage', yKey: 'Q4', stacked: true },
      ],
    };
  }

  ngOnInit(): void {
  }



}
