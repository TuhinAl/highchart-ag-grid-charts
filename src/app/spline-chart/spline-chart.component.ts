import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss']
})
export class SplineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {

    var chart4 = Highcharts.chart("splineContainer",this.chartOptions);
  }


  chartOptions: Highcharts.Options= {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Patients Count By Week'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      accessibility: {
        description: 'Months of the year'
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value + '';
        }
      }
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 5,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: this.getSeries()
  }

  getSeries():any{
    return [{
      name: 'In Patient',
      marker: {
        symbol: 'circle'
      },
      data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0,
        17.8,]

    }, {
      name: 'Out Patient',
      marker: {
        symbol: 'circle'
      },
      data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,]
    }]
  }

}
