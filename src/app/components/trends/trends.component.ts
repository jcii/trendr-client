import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router'
import { TrendServiceService } from '../../services/trend-service.service'

@Component({
  moduleId: module.id,
  selector: 'app-trends',
  templateUrl: 'trends.component.html',
  styleUrls: ['trends.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TrendServiceService]
})
export class TrendsComponent implements OnInit {
  constructor(private _trendService: TrendServiceService) { }
  ngOnInit() {}

}
