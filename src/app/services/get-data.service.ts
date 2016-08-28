import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url).map((response: Response) => response.json())
  }

  postData(url: string, postObj: any) {
    return this.http.post(url, postObj).map((response: Response) => response.json())
  }


}
