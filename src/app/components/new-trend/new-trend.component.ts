import { Component, OnInit } from '@angular/core';
import { StockSearchService } from '../../services/stock-search.service'
import { GetDataService } from '../../services/get-data.service'
import { TrendServiceService } from '../../services/trend-service.service'
import { ROUTER_DIRECTIVES, Router} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-new-trend',
  templateUrl: 'new-trend.component.html',
  styleUrls: ['new-trend.component.css'],
  providers: [StockSearchService, GetDataService, TrendServiceService, ROUTER_DIRECTIVES]
})

export class NewTrendComponent implements OnInit {
  public symbols: any = []
  public selectedSymbol: any = {} 
  public isTrendSelected: boolean = false
  public trendKeywords:any = []
  public symbolCallComplete: boolean = false
  public trend: any = {
    title: ''
  }

  constructor(
    private _stockSearchService: StockSearchService, 
    private _getDataService: GetDataService,
    private _trendService: TrendServiceService,
    private _router: Router
    ) { }
  ngOnInit() { }
  moveUp(event){
    console.log("up");
  }
  moveDown(event){
    console.log("down");
  }
  removeStockSymbol(){
    this.isTrendSelected = false
    this.symbolCallComplete = false
    this.selectedSymbol = {}
  }
  addSymbolToTrend(symbol){    
    if(this.symbols.length != 0){
      this.isTrendSelected = true
      this.selectedSymbol = symbol
    }
  }
  addKeyWord(keyword_input){
    this.trendKeywords.push(keyword_input.value)
    keyword_input.value = null

  }
  removeKeyWord(keyword){
    this.trendKeywords.splice(this.trendKeywords.indexOf(keyword), 1)
  }
  searchForStock(query){
    this._stockSearchService.searchForSymbol(query)
      .subscribe(
        response => {
          this.symbols = response.json()
          this.symbolCallComplete = true
          console.log(this.symbols)
        },
        error => {
          console.log(error)
        }
      )
  }
  createNewTrend(){
    if(this.symbols.length != 0 && this.trendKeywords.length !=0){
      const newTrend = {
        trend_title: this.trend.title,
        trend_keywords: this.trendKeywords,
        trend_symbols: [this.selectedSymbol.symbol]
      }
      console.log(newTrend);
      this._trendService.createTrend(newTrend)
      .subscribe(
        data =>  this._router.navigate(['/dash', '/trends']),
        err => console.log(err)
      )
    }    
  }
}
