import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router'
import { Response } from '@angular/http'
import { Subscription } from 'rxjs/Rx'
import { GetDataService } from '../../services/get-data.service'
import { TweetCountPercentageService } from '../../services/tweet-count-percentage.service'
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
  providers: [GetDataService, TweetCountPercentageService]
})



export class TrendDetailRootComponent implements OnInit {
  private subscription: Subscription
  trendId: any

  constructor(private getDataService: GetDataService, private activatedRoute: ActivatedRoute, private _tweetCount: TweetCountPercentageService) {
    this.subscription = activatedRoute.params.subscribe(param => {
      this.trendId = param['id']
    })
  }


  getLocalStorage = () => {
    let user = localStorage.getItem('user')
    console.log(JSON.parse(JSON.parse(user)._body).username)
  }

  usedTweetIds: number[] = [0]
  tweetsForDisplay: any[] = []

  getTweetsForDisplay = () => {
    this.getDataService.postData('http://localhost:3000/twitterStream/tweetsForDisplay', {usedTweetIds: this.usedTweetIds, trend_id: this.trendId}).subscribe(data => {
      data.forEach(tweet => {
        this.usedTweetIds.push(tweet.id)
        this.tweetsForDisplay.push(tweet)
      })
        console.log(this.tweetsForDisplay.length)
    })
  }
  tweetInterval: any

    ngOnInit() {
      this.getLocalStorage()
      this.tweetInterval = setInterval(this.getTweetsForDisplay, 1000)
      this.getTweetsForDisplay()
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    clearInterval(this.tweetInterval)
  }

}
