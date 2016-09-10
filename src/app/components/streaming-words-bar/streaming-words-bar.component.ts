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
export class StreamingWordsBarComponent implements OnInit {

  constructor(private _getData: GetDataService) {}
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
  };

  @Input() trendId:number;
  @Input() user: string

  barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  barChartData:any[]

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  streamInterval: any

  updateChart = () => {
    this._getData.postData('http://localhost:3000/twitterStream/updateStreamGraph', {trend_id: this.trendId}).subscribe(data => {
      console.log(data);
      this.barChartLabels = data.axisLabels
      this.barChartData = [{data: data.dataPoints, label:'Related Streaming Words'}]
    })
  }

  openStream = ()=> {
    this._getData.postData('http://localhost:3000/twitterStream/startStream', {trend_id: this.trendId}).subscribe(data => {
      console.log(data)
    })
  }

  endStream = () =>{
    this._getData.postData('http://localhost:3000/twitterStream/endStream', {trend_id: this.trendId})
  }

  ngOnInit() {
    this.openStream()
    // this.updateChart()
    // this.streamInterval = setInterval(this.updateChart, 2500)

  }

  ngOnDestroy() {
    this.endStream()
    clearInterval(this.streamInterval);
  }


}
