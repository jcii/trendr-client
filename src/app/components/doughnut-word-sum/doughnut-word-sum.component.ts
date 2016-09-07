import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'app-doughnut-word-sum',
  templateUrl: 'doughnut-word-sum.component.html',
  styleUrls: ['doughnut-word-sum.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DoughnutWordSumComponent {

  @Input() doughnutChartLabels:string[]
  @Input() doughnutChartData:number[]
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
