import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { contentHeaders } from '../common/headers'


@Injectable()
export class StockSearchService {
  constructor( private _http:Http) { }
  searchForSymbol(symbol){
    return this._http.post('http://127.0.0.1:3000/stockSymbol', {searchString: symbol}, { headers: contentHeaders })
  }
}
