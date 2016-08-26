import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'app-trend-detail-root',
  templateUrl: 'trend-detail-root.component.html',
  styleUrls: ['trend-detail-root.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES, ActivatedRoute]
})
export class TrendDetailRootComponent implements OnDestroy {
  private subscription: Subscription
  trendId: any

  constructor(private activatedRoute: ActivatedRoute) {
    this. subscription = activatedRoute.params.subscribe((params: any) => this.trendId = params['trendId'])
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
