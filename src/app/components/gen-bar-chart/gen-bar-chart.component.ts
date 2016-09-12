import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'app-gen-bar-chart',
  templateUrl: 'gen-bar-chart.component.html',
  styleUrls: ['gen-bar-chart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]

})
export class GenBarChartComponent {
  private barChartColors: any[] = [{ backgroundColor: ["#000", "#000", "#000", "#000", "#000"] }]; 

  constructor() {}
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };
  @Input() barChartLabels:string[]
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  @Input() barChartData:any[]

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
