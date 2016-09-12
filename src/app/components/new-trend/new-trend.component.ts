import { Component, OnInit } from '@angular/core';
import { StockSearchService } from '../../services/stock-search.service'
import { GetDataService } from '../../services/get-data.service'
import { TrendServiceService } from '../../services/trend-service.service'
import { ROUTER_DIRECTIVES, Router} from '@angular/router'
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  moduleId: module.id,
  selector: 'app-new-trend',
  templateUrl: 'new-trend.component.html',
  styleUrls: ['new-trend.component.css'],
  providers: [StockSearchService, GetDataService, TrendServiceService, ROUTER_DIRECTIVES],
  directives: [DROPDOWN_DIRECTIVES]

})

export class NewTrendComponent implements OnInit {
  public primarySelected: boolean = false
  public primaryKeywordIndex: number 
  public symbols: any = []
  public selectedSymbol: any = {} 
  public isTrendSelected: boolean = false
  public trendKeywords:any = []
  public symbolCallComplete: boolean = false
  public trend: any = {
    title: ''
  }


  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  constructor (
    private _stockSearchService: StockSearchService, 
    private _getDataService: GetDataService,
    private _trendService: TrendServiceService,
    private _router: Router
    ) { }
  ngOnInit() { }
  public isPrimary(word){
    return this.trendKeywords.indexOf(word) === this.primaryKeywordIndex
  }
   public selectPrimaryKeyword(event, keyword) {
    event.preventDefault()
    this.primarySelected = true
    this.primaryKeywordIndex = this.trendKeywords.indexOf(keyword)
    console.log(keyword)
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
    if(this.trendKeywords.length === 0){
      this.primaryKeywordIndex = 0
      this.primarySelected = true
    }
    this.trendKeywords.push(keyword_input.value)
    keyword_input.value = null
  }
  removeKeyWord(keyword){
    this.trendKeywords.splice(this.trendKeywords.indexOf(keyword), 1)
    if(this.trendKeywords.length === 0){
      this.primaryKeywordIndex = 0
      this.primarySelected = true
    }
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
        trend_description: this.trend.description,
        trend_keywords: this.trendKeywords.map(i => {
          return {
            keyword: i,
            is_active: i === this.trendKeywords[this.primaryKeywordIndex]
          }
        }),
        trend_symbols: [this.selectedSymbol.symbol]
      }
      console.log(newTrend);
      this._trendService.createTrend(newTrend)
      .subscribe(
        data =>  {
          console.log(data)
          this._router.navigate(['/dash', '/mytrends'])  
        },
        err => console.log(err)
      )
    }    
  }
}
