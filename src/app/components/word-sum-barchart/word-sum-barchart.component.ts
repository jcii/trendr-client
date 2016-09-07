import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { GetDataService } from '../../services/get-data.service'

@Component({
  moduleId: module.id,
  selector: 'app-word-sum-barchart',
  templateUrl: 'word-sum-barchart.component.html',
  styleUrls: ['word-sum-barchart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [GetDataService]
})
export class WordSumBarchartComponent {

  constructor(private _getData: GetDataService) {}

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() barChartLabels:string[]
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  @Input() barChartData:any[];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {

  }

}
