import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, provideRouter, ROUTER_DIRECTIVES } from '@angular/router'
import { TrendServiceService } from '../../services/trend-service.service'

@Component({
  moduleId: module.id,
  selector: 'app-mytrends',
  templateUrl: 'mytrends.component.html',
  styleUrls: ['mytrends.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TrendServiceService]
})
export class MytrendsComponent implements OnInit {
  public userTrends: any
  constructor(public route: ActivatedRoute) {
    console.log("component loaded")
    this.route.data.subscribe(
      response => {
        this.userTrends = response['trends'].json().trends
      }
    )
  console.log(this.userTrends);
}
  ngOnInit() { }
}
