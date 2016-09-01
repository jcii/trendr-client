import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { DropdownDemoComponent } from '../drop-down-button'
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
