import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, provideRouter, ROUTER_DIRECTIVES } from '@angular/router'
import { TrendServiceService } from '../../services/trend-service.service'
import { TestChartComponent } from '../../components/test-chart'
import { HichartComponent } from '../../components/hichart'
import { GenLineChartComponent } from '../gen-line-chart'
import { DayNamePipe } from '../../pipes/day-name.pipe'

@Component({
  moduleId: module.id,
  selector: 'app-mytrends',
  templateUrl: 'mytrends.component.html',
  styleUrls: ['mytrends.component.css'],
  directives: [ROUTER_DIRECTIVES, TestChartComponent, HichartComponent, GenLineChartComponent],
  providers: [TrendServiceService],
  pipes: [DayNamePipe]
})
export class MytrendsComponent implements OnInit {
  public userTrends: any
  days = {
      0: 'Mon',
      1: 'Tue',
      2: 'Wed',
      3: 'Thu',
      4: 'Fri',
      5: 'Sat',
      6: 'Sun'
  }
  constructor(public route: ActivatedRoute) {
    console.log("component loaded")
    this.route.data.subscribe(
      response => {
        console.log(response['trends'].json().stockHistories)
        this.userTrends = response['trends'].json().trend.trends
        this.userTrends.forEach(elem => {
          response['trends'].json().stockHistories.forEach(stock => {
            if (stock.trend_id == elem.id) {
              console.log(JSON.parse(stock.body))
              console.log(JSON.parse(stock.body).Dates)
              elem.stockDates = JSON.parse(stock.body).Dates.map(elem => this.days[new Date(elem).getDay()])
              elem.stockValues = JSON.parse(stock.body).Elements[0].DataSeries.close.values
            }
          })
        })
      }
    )
}
  ngOnInit() { }
}
