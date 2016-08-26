import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login-root',
  templateUrl: 'login-root.component.html',
  styleUrls: ['login-root.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
