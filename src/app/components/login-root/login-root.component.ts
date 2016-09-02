import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common'
import { Http, Headers } from '@angular/http'
import { contentHeaders } from '../../common/headers'
import { User } from '../../interfaces/user.interface'

@Component({
  moduleId: module.id,
  selector: 'app-login-root',
  templateUrl: 'login-root.component.html',
  styleUrls: ['login-root.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})

export class LoginRootComponent implements OnInit {
  public user: User
  constructor(public router:Router, public http:Http) { }
  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      passconf: ''
    }
  }
  login(user: User) {
    this.http.post('https://httpbin.org/post', user, {headers: contentHeaders})
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
  