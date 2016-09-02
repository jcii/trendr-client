import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers'
import 'rxjs/Rx'

@Injectable()

export class UserService {
  constructor(private _http: Http) { }
  registerUser(user) { 
    return this._http.post('http://127.0.0.1:3000/register', user, { headers: contentHeaders })
  }
  checkIfUserExists(username) {
    return this._http.post('http://127.0.0.1:3000/register/userCheck', { username }, { headers: contentHeaders })
  }
}
