import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar'

@Component({
  moduleId: module.id,
  selector: 'app-home-root',
  templateUrl: 'home-root.component.html',
  styleUrls: ['home-root.component.css'],
  directives: [NavbarComponent]
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
