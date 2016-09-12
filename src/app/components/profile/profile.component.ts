import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { HichartComponent } from '../hichart'
@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [ROUTER_DIRECTIVES, HichartComponent]
})
export class ProfileComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
