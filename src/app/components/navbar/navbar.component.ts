import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'
import { FaComponent } from 'angular2-fontawesome/components'
import { FaDirective } from 'angular2-fontawesome/directives' 

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css', '/vendor/font-awesome/css/font-awesome.css'],
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES, FaComponent, FaDirective]
})

export class NavbarComponent implements OnInit {
  constructor(private _router: Router) { }
  username: string
  ngOnInit() { 
    let user = localStorage.getItem('user')
    user = JSON.parse(JSON.parse(user)._body).username
    this.username = user
  }
  userLogout(event) {
    this._router.navigate(['/login'])
  }


}
