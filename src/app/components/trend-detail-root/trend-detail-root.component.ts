import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router'
import { Response } from '@angular/http'
import { Subscription } from 'rxjs/Rx'
import { GetDataService } from '../../services/get-data.service'


@Component({
  moduleId: module.id,
  selector: 'app-trend-detail-root',
  templateUrl: 'trend-detail-root.component.html',
  styleUrls: ['trend-detail-root.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
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

  ngOnInit() {
    this.getDataService.getData('http://localhost:3000/realtimeStocks').subscribe(data => {
      console.log(typeof data);
      
      this.getDataService.postData('http://localhost:3000/realtimeStocks/updateDatabase', JSON.parse(data)).subscribe(finalData => {
        console.log(finalData)
      })
      
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
