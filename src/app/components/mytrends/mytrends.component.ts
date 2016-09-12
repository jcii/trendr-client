import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, provideRouter, ROUTER_DIRECTIVES } from '@angular/router'
import { TrendServiceService } from '../../services/trend-service.service'
import { TestChartComponent } from '../../components/test-chart'
import { HichartComponent } from '../../components/hichart'
import { GenLineChartComponent } from '../gen-line-chart'

@Component({
  moduleId: module.id,
  selector: 'app-mytrends',
  templateUrl: 'mytrends.component.html',
  styleUrls: ['mytrends.component.css'],
  directives: [ROUTER_DIRECTIVES, TestChartComponent, HichartComponent, GenLineChartComponent],
  providers: [TrendServiceService]
})
export class MytrendsComponent implements OnInit {
  public userTrends: any
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
              elem.stockDates = JSON.parse(stock.body).Dates
              elem.stockValues = JSON.parse(stock.body).Elements[0].DataSeries.close.values
            }
          })
          console.log(elem)
        })
      }
    )
}
  ngOnInit() { }
}
