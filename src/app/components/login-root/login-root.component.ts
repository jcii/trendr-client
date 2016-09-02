import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common'
import { Http, Headers } from '@angular/http'
import { contentHeaders } from '../../common/headers'
// import * as woot from 'angular2-ui-switch'
// console.log(woot);


@Component({
  moduleId: module.id,
  selector: 'app-login-root',
  templateUrl: 'login-root.component.html',
  styleUrls: ['login-root.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginRootComponent implements OnInit {
  constructor(public router:Router, public http:Http) { }
  ngOnInit() { }
  login(event, username, password) {
    event.preventDefault()
    let body = JSON.stringify({ username, password })
    this.http.post('https://httpbin.org/post', body, {headers: contentHeaders})
      .subscribe(
        response => {
          console.log(response.json())
        },
        error => {
          console.log(error);
        }
      )
  }
  goToRegister(event) {
    this.router.navigate(['/register'])
  }
}
  