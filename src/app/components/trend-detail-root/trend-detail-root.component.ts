import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar'

@Component({
  moduleId: module.id,
  selector: 'app-trend-detail-root',
  templateUrl: 'trend-detail-root.component.html',
  styleUrls: ['trend-detail-root.component.css'],
  directives: [NavbarComponent]
})
export class TrendDetailRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
