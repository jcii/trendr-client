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
import { SidebarComponent } from '../../sidebar'
import { CarouselComponent } from '../carousel'


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
    GenBarChartComponent, 
    NavbarComponent,
    SidebarComponent,
    CarouselComponent],
  providers: [GetDataService]
})



export class TrendDetailRootComponent implements OnInit {
  private subscription: Subscription
  trendId: any

  constructor(private getDataService: GetDataService, private activatedRoute: ActivatedRoute) {
    // this.subscription = activatedRoute.params.subscribe(param => {
    //   this.trendId = param['trendId']
    // })
  }

  ngOnInit() {
    
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
