import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { BarChartComponent } from '../../bar-chart'
import { HichartComponent } from '../hichart'
import { WordSumBarchartComponent } from '../word-sum-barchart'
import { GetDataService } from '../../services/get-data.service'
import { DoughnutWordSumComponent } from '../doughnut-word-sum'
import { RealtimeStockChartComponent } from '../realtime-stock-chart'
import { GenLineChartComponent } from '../gen-line-chart'
import { GenBarChartComponent } from '../gen-bar-chart'
import { StreamingWordsBarComponent } from '../streaming-words-bar'
import { Subscription } from 'rxjs/Rx'
import { TweetCountPercentageService } from '../../services/tweet-count-percentage.service'
import { PercentagePipe } from '../../pipes/percentage.pipe'

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
      GenBarChartComponent, 
      StreamingWordsBarComponent],
  providers: [GetDataService], 
  pipes: [PercentagePipe]
})
export class CarouselComponent {
  private subscription: Subscription

  constructor(private _getData: GetDataService, private _activatedRoute: ActivatedRoute, private _tweetCount: TweetCountPercentageService) {
    this.subscription = this._activatedRoute.params.subscribe(param => {
      this.trendId = param['id']
    })
  }
    
    trendId: any
    user: string
    tweetCount: number = 1
    tweetsWithKeyword: number = 0
    keywordPecentage: number


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
      this._getData.postData('http://localhost:3000/stockHistory', {user: this.user, trendId: this.trendId, NumberOfDays: 10, DataPeriod: 'Day'}).subscribe(data => {
        console.log(data);
        this.stockHistoryLabels = data.map(elem => elem.full_date)
        this.stockHistoryData = data.map(elem => elem.price)
        this.showStockHistory = true
      })
    }

    // groupThatShit() {
    //   this._getData.postData('http://localhost:3000/stockHistory/groupBy', {grouping: 'day'}).subscribe(data => {
    //     console.log(data)
    //     this.groupedStockHistoryData = data.map(elem => Number(elem.price))
    //     this.groupedStockHistoryLabels = data.map(elem => elem.day)
    //     this.showStockHistory = false
    //     this.groupData = true
    //   })
    // }
  
  getLocalStorage = () => {
    let user = localStorage.getItem('user')
    this.user = JSON.parse(JSON.parse(user)._body).username
    console.log(this.user);
    
  }

  getTweetCount = () => {
    this._getData.postData('http://localhost:3000/twitterStream/tweetCount', {trend_id: this.trendId}).subscribe(count => {
      this.tweetCount = count
    })
  }

  tweetCountInterval: any
    openStream = ()=> {
    this._getData.postData('http://localhost:3000/twitterStream/startStream', {trend_id: this.trendId}).subscribe(data => {
      console.log(data)
    })
  }

  endStream = () =>{
    this._getData.postData('http://localhost:3000/twitterStream/endStream', {trend_id: this.trendId}).subscribe(data => {
      console.log(data)
    })
  }

  streamInterval: any
  streamingBarChartLabels: any[]
  streamingBarChartData: any[]

  updateChart = () => {
    this._getData.postData('http://localhost:3000/twitterStream/updateStreamGraph', {trend_id: this.trendId}).subscribe(data => {
      this.streamingBarChartLabels = data.axisLabels
      this.streamingBarChartData = [{data: data.dataPoints, label:'Related Streaming Words'}]
      this.doughnutChartLabels = data.axisLabels
      this.doughnutChartData = data.dataPoints.map(elem => elem / data.total)
    })
  }

  clearTrendTweets = () => {
    this._getData.postData('http://localhost:3000/twitterStream/clearTweets', {trend_id: this.trendId}).subscribe(() => {
      console.log('Tweets cleared')
    })
  } 


  ngOnInit() {
    this.openStream()
    this.updateChart()
    this.streamInterval = setInterval(this.updateChart, 7000)
    this.getLocalStorage()
    this.getStockHistory()
    this.tweetCountInterval = setInterval(this.getTweetCount, 1000)
    this._tweetCount.pushDataEvent.subscribe(count => {
      this.tweetsWithKeyword = count
      this.keywordPecentage = Number((this.tweetsWithKeyword / this.tweetCount))
      console.log(this.keywordPecentage);
      
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
    clearInterval(this.tweetCountInterval)
    this.endStream()
    clearInterval(this.streamInterval);
    this.clearTrendTweets()
  } 

}
