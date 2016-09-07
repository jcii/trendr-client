import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';
import {TrafficLightComponent } from '../components/traffic-light'
import { MarketStatusComponent } from '../components/market-status'

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, TrafficLightComponent, MarketStatusComponent]
})

export class SidebarComponent implements OnInit {
	isActive = false;
	showMenu: string = '';

  constructor() { }
  ngOnInit() { }
	eventCalled() {
		this.isActive = !this.isActive;
	}
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
