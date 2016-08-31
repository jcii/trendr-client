import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'bar-chart',
  template: `
    <base-chart class="chart"
           [datasets]="barChartData"
           [labels]="barChartLabels"
           [options]="barChartOptions"
           [legend]="barChartLegend"
           [chartType]="barChartType"
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
export class BarChartComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}