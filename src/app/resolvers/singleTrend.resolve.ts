import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Rx';
import { TrendServiceService } from '../services/trend-service.service'

@Injectable()
export class singleTrendResolver implements Resolve<any> {
  constructor(private _trendService: TrendServiceService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this._trendService.getTrendById(route.params['id'])
  }
}
