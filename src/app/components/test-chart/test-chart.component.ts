import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts'

@Component({
  moduleId: module.id,
  selector: 'app-test-chart',
  templateUrl: 'test-chart.component.html',
  styleUrls: ['test-chart.component.css'],
  directives: [CHART_DIRECTIVES] //CHART_DIRECTIVES
})
export class TestChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
