import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel'

@Component({
  moduleId: module.id,
  selector: 'app-dash-home',
  templateUrl: 'dash-home.component.html',
  styleUrls: ['dash-home.component.css'],
  directives: [CarouselComponent]
})
export class DashHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
