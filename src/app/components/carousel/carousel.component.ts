import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { BarChartComponent } from '../../bar-chart'
import { HichartComponent } from '../hichart'
import { WordSumBarchartComponent } from '../word-sum-barchart'
import { GetDataService } from '../../services/get-data.service'
import { DoughnutWordSumComponent } from '../doughnut-word-sum'
import { RealtimeStockChartComponent } from '../realtime-stock-chart'
import { GenLineChartComponent } from '../gen-line-chart'
import { GenBarChartComponent } from '../gen-bar-chart'

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['bootstrap.min.css', 'carousel.component.css'],
  directives: [BarChartComponent, 
      HichartComponent, 
      WordSumBarchartComponent, 
      DoughnutWordSumComponent, 
      RealtimeStockChartComponent,
      GenLineChartComponent, 
      GenBarChartComponent],
  providers: [GetDataService]
})
export class CarouselComponent {

  constructor(private _getData: GetDataService) {}

  blur(elem) {
    document.getElementById(elem).blur()
  }
  barChartLabels:any[]
  barChartData:any[]
  doughnutChartLabels:string[]
  doughnutChartData:number[]

  showStockHistory: boolean = false
  groupData: boolean = false
  stockHistoryData: any[]
  stockHistoryLabels: any[]
  groupedStockHistoryData: any[]
  groupedStockHistoryLabels: any[]

    getStockHistory() {
      this._getData.postData('http://localhost:3000/stockHistory', {NumberOfDays: 30, DataPeriod: 'Day', Symbol: 'NFLX'}).subscribe(data => {
        console.log(data);
        this.stockHistoryLabels = data.map(elem => elem.full_date)
        this.stockHistoryData = data.map(elem => elem.price)
        this.showStockHistory = true
      })
    }

    groupThatShit() {
      this._getData.postData('http://localhost:3000/stockHistory/groupBy', {grouping: 'day'}).subscribe(data => {
        console.log(data)
        this.groupedStockHistoryData = data.map(elem => Number(elem.price))
        this.groupedStockHistoryLabels = data.map(elem => elem.day)
        this.showStockHistory = false
        this.groupData = true
      })
    }


  ngOnInit() {
    this._getData.getData('http://localhost:3000/twitterSearch').subscribe(data => {
      console.log(data);
      this.barChartLabels = data.axisLabels
      this.barChartData = [{data: data.dataPoints, label:'Related Words'}]
      this.doughnutChartLabels = data.axisLabels
      this.doughnutChartData = data.dataPoints.map(elem => elem/data.total)
    })
    this.getStockHistory()
  }

}
