import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel'
import { HichartComponent } from '../hichart'

@Component({
  moduleId: module.id,
  selector: 'app-dash-home',
  templateUrl: 'dash-home.component.html',
  styleUrls: ['dash-home.component.css'],
  directives: [CarouselComponent, HichartComponent]
})
export class DashHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);    
  }

}
