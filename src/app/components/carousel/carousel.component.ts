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
  providers: [GetDataService]
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
    tweetCount: number


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
      this._getData.postData('http://localhost:3000/stockHistory', {user: this.user, trendId: this.trendId, NumberOfDays: 7, DataPeriod: 'Day'}).subscribe(data => {
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
    // this._getData.getData('http://localhost:3000/twitterSearch').subscribe(data => {
    //   console.log(data);
    //   this.barChartLabels = data.axisLabels
    //   this.barChartData = [{data: data.dataPoints, label:'Related Words'}]
    //   this.doughnutChartLabels = data.axisLabels
    //   this.doughnutChartData = data.dataPoints.map(elem => elem/data.total)
    // })
    this.openStream()
    this.updateChart()
    this.streamInterval = setInterval(this.updateChart, 5000)
    this.getLocalStorage()
    this.getStockHistory()
    this.tweetCountInterval = setInterval(this.getTweetCount, 1000)
    this._tweetCount.pushDataEvent.subscribe(count => {
      console.log('*********************')
      console.log(count)
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
