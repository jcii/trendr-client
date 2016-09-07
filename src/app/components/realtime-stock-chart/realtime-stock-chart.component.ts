import { Component, OnInit, ApplicationRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { GetDataService } from '../../services/get-data.service'
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

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

  constructor(private getDataService: GetDataService, private ar: ApplicationRef, private cdr: ChangeDetectorRef) { }


    getStockData = () => {
    this.getDataService.getData('http://localhost:3000/realtimeStocks').subscribe(data => {
      this.getDataService.postData('http://localhost:3000/realtimeStocks/updateDatabase', JSON.parse(data)).subscribe(finalData => {
        this.dates = finalData.map(elem => new Date(Number(elem.timestamp)))
        this.prices = finalData.map(elem => elem.price)
        this.lineChartData = [{data: this.prices, label: 'stock price yo'}]
        this.lineChartLabels = this.dates
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
