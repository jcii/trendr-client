import { Component, OnInit, ApplicationRef, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { GetDataService } from '../../services/get-data.service'
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { StockToTrendDetailService } from '../../services/stock-to-trend-detail.service'


@Component({
  moduleId: module.id,
  selector: 'app-realtime-stock-chart',
  templateUrl: 'realtime-stock-chart.component.html',
  styleUrls: ['realtime-stock-chart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RealtimeStockChartComponent implements OnInit {
  dates: any[] = []
  prices: number[] = []
  stockInterval: any
  lineChartDataArray: Array<any> = [
    {data: this.prices, label: 'Stock Price Yo'}
  ]
  @Input() trendId: any;
  @Input() user: string;

  constructor(private getDataService: GetDataService, 
    private ar: ApplicationRef, 
    private cdr: ChangeDetectorRef, 
    private _stockToTrendDetailService: StockToTrendDetailService) { }


    getStockData = () => {
    this.getDataService.postData('http://localhost:3000/realtimeStocks', {trendId: this.trendId, user: this.user}).subscribe(data => {
      let postData = JSON.parse(data)
      postData.trend_id = Number(this.trendId)
      this.getDataService.postData('http://localhost:3000/realtimeStocks/updateDatabase', postData).subscribe(finalData => {
        this.dates = finalData.map(elem => new Date(Number(elem.timestamp)))
        this.prices = finalData.map(elem => elem.price)
        this.lineChartData = [{data: this.prices.reverse(), label: 'stock price yo'}]
        this.lineChartLabels = this.dates.reverse()
        this._stockToTrendDetailService.pushData(this.prices[this.prices.length - 1])  
      })
    })
  }


    // lineChart
  public lineChartData:Array<any> = [
    {data: this.prices, label: 'Stock Price Yo'}
  ]
  public lineChartLabels:Array<any> = this.dates;
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: '#00E461',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnInit() {
    this.getStockData()
    this.stockInterval = setInterval(this.getStockData, 10000) 
  }

  ngOnDestroy() {
    clearInterval(this.stockInterval);
  }

}
