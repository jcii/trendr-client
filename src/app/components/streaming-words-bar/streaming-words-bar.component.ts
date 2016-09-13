import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { GetDataService } from '../../services/get-data.service'

@Component({
  moduleId: module.id,
  selector: 'app-streaming-words-bar',
  templateUrl: 'streaming-words-bar.component.html',
  styleUrls: ['streaming-words-bar.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [GetDataService]
})
export class StreamingWordsBarComponent {
 private barChartColors: any[] = [{ backgroundColor: ["#FC913A", "#FC913A", "#FC913A", "#FC913A", "#FC913A"] }]; 

  constructor(private _getData: GetDataService) {}
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };

  @Input() trendId:number;
  @Input() user: string

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  @Input() barChartLabels:string[]
  @Input() barChartData:any[]

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
