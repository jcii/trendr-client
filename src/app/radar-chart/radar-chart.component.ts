import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'radar-chart',
  template: `
    <base-chart class="chart"
             [datasets]="radarChartData"
             [labels]="radarChartLabels"
             [chartType]="radarChartType"
             (chartHover)="chartHovered($event)"
             (chartClick)="chartClicked($event)"></base-chart>
  `,
  styles: [`
    .chart {
      display: block;
    }`
  ],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RadarChartComponent {
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}