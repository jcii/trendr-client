import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel'
import { HichartComponent } from '../hichart'
import { GetDataService } from '../../services/get-data.service'

@Component({
  moduleId: module.id,
  selector: 'app-dash-home',
  templateUrl: 'dash-home.component.html',
  styleUrls: ['dash-home.component.css'],
  directives: [CarouselComponent, HichartComponent],
  providers: [GetDataService]
})
export class DashHomeComponent implements OnInit {

  constructor(private _getData: GetDataService) { }
  username: string
  totalTweets: number
  stockPrices: number
  totalTrends: number
  getUserStats = () => {
    this._getData.postData('http://localhost:3000/user/', {username: this.username}).subscribe(data => {
      this.totalTweets = data.tweets
      this.stockPrices = data.stockPrices
      this.totalTrends = data.trends
    })
  }

  ngOnInit() {
    this.username = JSON.parse(JSON.parse(localStorage.getItem('user'))._body).username
    this.getUserStats()
  }

}
