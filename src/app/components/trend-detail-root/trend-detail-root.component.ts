import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router'
import { Response } from '@angular/http'
import { Subscription } from 'rxjs/Rx'
import { GetDataService } from '../../services/get-data.service'
import { StockHistoryComponent } from '../stock-history'
import { TestChartComponent } from '../test-chart'
import { RealtimeStockChartComponent } from '../realtime-stock-chart'
import { GenLineChartComponent } from '../gen-line-chart'
import { GenBarChartComponent } from '../gen-bar-chart'


@Component({
  moduleId: module.id,
  selector: 'app-trend-detail-root',
  templateUrl: 'trend-detail-root.component.html',
  styleUrls: ['trend-detail-root.component.css'],
  directives: [NavbarComponent, 
    ROUTER_DIRECTIVES, 
    StockHistoryComponent, 
    TestChartComponent, 
    RealtimeStockChartComponent, 
    GenLineChartComponent, 
    GenBarChartComponent],
  providers: [GetDataService]
})
export class TrendDetailRootComponent implements OnInit {
  private subscription: Subscription
  trendId: any

  constructor(private getDataService: GetDataService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(param => {
      this.trendId = param['trendId']
    })
  }
  showStockHistory: boolean = false
  groupData: boolean = false
  stockHistoryData: any[]
  stockHistoryLabels: any[]
  groupedStockHistoryData: any[]
  groupedStockHistoryLabels: any[]

    getStockHistory() {
    this.getDataService.postData('http://localhost:3000/stockHistory', {NumberOfDays: 30, DataPeriod: 'Day', Symbol: 'NFLX'}).subscribe(data => {
      console.log(data);
      this.stockHistoryLabels = data.map(elem => elem.full_date)
      this.stockHistoryData = data.map(elem => elem.price)
      this.showStockHistory = true
    })
  }

  groupThatShit() {
    this.getDataService.postData('http://localhost:3000/stockHistory/groupBy', {grouping: 'day'}).subscribe(data => {
      console.log(data)
      this.groupedStockHistoryData = data.map(elem => Number(elem.price))
      this.groupedStockHistoryLabels = data.map(elem => elem.day)
      console.log(this.groupedStockHistoryData)
      console.log(this.groupedStockHistoryLabels)
      this.showStockHistory = false
      this.groupData = true
    })
  }

  ngOnInit() {
    this.getStockHistory()
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    // clearInterval(this.stockInterval);
  }

}
