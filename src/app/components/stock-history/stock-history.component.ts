import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service'

@Component({
  moduleId: module.id,
  selector: 'app-stock-history',
  templateUrl: 'stock-history.component.html',
  styleUrls: ['stock-history.component.css'],
  providers: [GetDataService]
})
export class StockHistoryComponent implements OnInit {

  constructor(private getDataService: GetDataService) { }

  getStockHistory() {
    this.getDataService.getData('http://localhost:3000/stockHistory/1').subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
