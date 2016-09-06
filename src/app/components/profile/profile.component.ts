import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
