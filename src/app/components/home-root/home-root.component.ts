import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ModalDemoComponent } from '../test-modal'
import { TestChartComponent } from '../test-chart'
import { BarChartComponent } from '../../bar-chart'
import {  RadarChartComponent } from '../../radar-chart'

@Component({
  moduleId: module.id,
  selector: 'app-home-root',
  templateUrl: 'home-root.component.html',
  styleUrls: ['home-root.component.css'],
  directives: [NavbarComponent, 
              ModalDemoComponent, 
              TestChartComponent, 
              BarChartComponent, 
              RadarChartComponent]
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
