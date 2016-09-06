import { Component, OnInit } from '@angular/core';
import { StockSearchService } from '../../services/stock-search.service'

@Component({
  moduleId: module.id,
  selector: 'app-new-trend',
  templateUrl: 'new-trend.component.html',
  styleUrls: ['new-trend.component.css'],
  providers: [StockSearchService]
})
export class NewTrendComponent implements OnInit {
  constructor(private _stockSearchService: StockSearchService) { }
  ngOnInit() { }
  searchForStock(query){
    this._stockSearchService.searchForSymbol(query)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log(error)
        }
      )
  }
}
