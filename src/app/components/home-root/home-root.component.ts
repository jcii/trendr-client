import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar'
import { ModalDemoComponent } from '../test-modal'

@Component({
  moduleId: module.id,
  selector: 'app-home-root',
  templateUrl: 'home-root.component.html',
  styleUrls: ['home-root.component.css'],
  directives: [NavbarComponent, ModalDemoComponent]
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
