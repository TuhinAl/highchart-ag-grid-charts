import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartService} from "./chart.service";

@Component({
  selector: 'app-chart',
  providers:[ChartService],
  template: '<div #host></div>',
})
export class ChartComponent {

  @Input() config: any;
  @ViewChild('host') host;
  constructor(public chartService: ChartService) { }

  // ngOnInit(changes: SimpleChanges) {
  //   console.log("changes: ======> ",changes)
  //   // const { config } = changes;
  //   if(changes[0].currentValue) {
  //     this.chartService.redraw(this.host.nativeElement, changes[0].currentValue);
  //   }
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes: ======> ",changes)
    // const { config } = changes;
    if(changes['currentValue']) {
      this.chartService.redraw(this.host.nativeElement, changes['currentValue']);
    }
  }

}
