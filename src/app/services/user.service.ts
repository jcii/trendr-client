import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../common/headers'
import 'rxjs/Rx'

@Injectable()

export class UserService {
  constructor(private http: Http) { }
  registerUser(user) { 
    return this.http.post('http://127.0.0.1:3000/register', user, { headers: contentHeaders })
  }

}
