import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http'
import { contentHeaders } from '../common/headers'

@Injectable()
export class TrendServiceService {
  constructor(private _http: Http ) { }
  createTrend(trend){
    return this._http.post('http://127.0.0.1:3000/trend/', trend, { headers: contentHeaders})
  }
  getAllTrends(){
    return this._http.post('http://127.0.0.1:3000/trend/userTrends/', {user_id: 1}, {headers: contentHeaders})
  }  
}
