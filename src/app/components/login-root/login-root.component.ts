import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common'
import { Http, Headers } from '@angular/http'
import { contentHeaders } from '../../common/headers'
import { User } from '../../interfaces/user.interface'
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

@Component({ 
  moduleId: module.id,
  selector: 'app-login-root',
  templateUrl: 'login-root.component.html',
  styleUrls: ['login-root.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  providers: [BrowserDomAdapter]
})

export class LoginRootComponent implements OnInit {
  public user: User
  constructor(
    private _router:Router, 
    private _http:Http, 
    private _browserDomAdapter: BrowserDomAdapter) { }
    
  ngOnInit() {
    this._browserDomAdapter.addClass(this._browserDomAdapter.query("div.animate-hide"), "animate-show")
    this.user = {
      username: '',
      password: '',
      passconf: ''
    }
  }
  login(user: User) {
    this._http.post('http://127.0.0.1:3000/login', user, {headers: contentHeaders})
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response))
          this._router.navigate(['/dash'])
        },
        error => {
          console.log(error);
        }
      )
  }
  goToRegister(event) {
    this._router.navigate(['/register'])
  }
}
  