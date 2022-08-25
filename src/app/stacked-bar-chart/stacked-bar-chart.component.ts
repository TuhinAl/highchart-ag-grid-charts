import {Component, ElementRef, ViewChild} from '@angular/core';
import {HighChartsService} from "./high-charts.service";
@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: 'stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent {

  @ViewChild('charts') public chartEl !: ElementRef;
  constructor(private highcharts: HighChartsService) {}

  // ngOnInit() {
  //   this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  // }

  ngAfterViewInit() {
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }

  myOptions = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Admission Discharge Death',
    },
    xAxis: {
      // categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      categories: [],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'If need to write any text horizontally',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Admission',
        data: [5, 3, 4, 7, 2],
      },
      {
        name: 'Discharge',
        data: [2, 2, 3, 2, 1],
      },
      {
        name: 'Death',
        data: [3, 4, 4, 2, 5],
      },
    ],
  };

}
