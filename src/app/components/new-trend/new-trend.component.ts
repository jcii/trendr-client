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
  public symbols: any
  constructor(private _stockSearchService: StockSearchService) { }
  ngOnInit() { }
  searchForStock(query){
    this._stockSearchService.searchForSymbol(query)
      .subscribe(
        response => {
          this.symbols = response.json()
          console.log(this.symbols)
          
        },
        error => {
          console.log(error)
        }
      )
  }
}
