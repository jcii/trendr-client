import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DropdownDemoComponent } from '../drop-down-button'

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, DropdownDemoComponent]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
