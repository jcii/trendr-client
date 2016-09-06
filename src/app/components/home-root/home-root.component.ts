import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router'
import { NavbarComponent } from '../navbar'
import { TestChartComponent } from '../test-chart'
import { BarChartComponent } from '../../bar-chart'
import { RadarChartComponent } from '../../radar-chart'
import { SidebarComponent } from '../../sidebar'
import { HichartComponent } from '../hichart'

@Component({
  moduleId: module.id,
  selector: 'app-home-root',
  templateUrl: 'home-root.component.html',
  styleUrls: ['home-root.component.css'],
  directives: [NavbarComponent,  
              TestChartComponent, 
              BarChartComponent, 
              SidebarComponent,
              RadarChartComponent,
              HichartComponent,
              ROUTER_DIRECTIVES]
})
export class HomeRootComponent implements OnInit {

    public constructor( public viewContainerRef:ViewContainerRef) {
      this.viewContainerRef = viewContainerRef;
    }

  ngOnInit() {
  }

}
