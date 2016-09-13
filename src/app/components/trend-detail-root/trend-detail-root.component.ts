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
import { CarouselToTrendDetailService } from '../../services/carousel-to-trend-detail.service'
import { PercentagePipe } from '../../pipes/percentage.pipe'

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
  providers: [GetDataService, TweetCountPercentageService, CarouselToTrendDetailService],
  pipes: [PercentagePipe]
})

export class TrendDetailRootComponent implements OnInit {
  private subscription: Subscription
  public tweetCountData: any = {
    tweet_count: 0,
    tweet_percentage: 0
  }
  public trendData: any
  public selectedTrend: any
  public userData: any
  public trendId: any
  public tweetsForView: any = []

  constructor (
    private getDataService: GetDataService, 
    private activatedRoute: ActivatedRoute, 
    private _tweetCount: TweetCountPercentageService,
    private _carouselToTrendDetail: CarouselToTrendDetailService,
    public route: ActivatedRoute
    ) {
      // get user
      this.userData = localStorage.getItem('user')
      // get trend id
      this.subscription = activatedRoute.params.subscribe(param => {
        this.trendId = param['id']
      })
      // get resolves from router
      this.route.data.subscribe(
        response => {
          this.trendData = response['trend'].json()
          this.selectedTrend = response['trends'].json().trend['trends'].filter(i => Number(this.trendId))[0]
        }
      )
      // populate array for tweets to display
      setInterval(() => {
        if(this.tweetsForDisplay.length != 0){
          this.tweetsForView.unshift(this.tweetsForDisplay[this.tweetsForDisplay.length - 1])
        }
      }, 2000)
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
        this._tweetCount.pushData(this.tweetsForDisplay.length)
    })
    
  }

  tweetInterval: any

    ngOnInit() {
      this.getLocalStorage()
      this.tweetInterval = setInterval(this.getTweetsForDisplay, 1000)
      this.getTweetsForDisplay()
      this._carouselToTrendDetail.pushDataEvent
        .subscribe(
          data => {
            this.tweetCountData = data
            console.log(this.tweetCountData)
          }
        )
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    clearInterval(this.tweetInterval)
  }
}
