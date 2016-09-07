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
  public symbols: any = []
  public selectedSymbol: any = {} 
  public isTrendSelected: boolean = false
  public trendKeywords:any = []
  public symbolCallComplete: boolean = false

  constructor(private _stockSearchService: StockSearchService) { }
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
      console.log("create new trend");
      
    }
    
  }
}
