import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-trends',
  templateUrl: 'trends.component.html',
  styleUrls: ['trends.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TrendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
