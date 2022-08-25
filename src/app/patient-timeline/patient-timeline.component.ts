import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_timeLine from "highcharts/modules/timeline";
HC_timeLine(Highcharts);

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.scss']
})
export class PatientTimelineComponent {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'x',
      type: 'timeline'
    },
    xAxis: {
      type: 'datetime',
      visible: false
    },
    yAxis: {
      gridLineWidth: 1,
      labels: {
        enabled: false
      }
    },
    tooltip: {
      style: {
        width: 300
      }
    },legend: {
      enabled: false
    },
    series: [{
      marker: {
        symbol: 'circle'
      },
        type: "timeline",
        data: [
          {
            name: "Stomac Pain",
          },
          {
            name: "Prescription",
            label:"ID:P03843"
          },
          {
            name: "Test:501",
          },
          {
            name: "Prescription",
            label:"ID:P02743"
          },
          {
            name: "Appendix",
          },
          {
            name: "Admitted In Hospital",
          },
          {
            name: "Surgery",
          } ,
          {
            name: "Prescription",
            label:"ID:P02743"
          },
          {
            name: "Released From Hospital",
          }
        ]
      }
    ]
  };

}
