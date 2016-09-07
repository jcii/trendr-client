import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { BarChartComponent } from '../../bar-chart'
import { HichartComponent } from '../hichart'
import { WordSumBarchartComponent } from '../word-sum-barchart'
import { GetDataService } from '../../services/get-data.service'
import { DoughnutWordSumComponent } from '../doughnut-word-sum'

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['bootstrap.min.css', 'carousel.component.css'],
  directives: [BarChartComponent, HichartComponent, WordSumBarchartComponent, DoughnutWordSumComponent],
  providers: [GetDataService]
})
export class CarouselComponent {

  constructor(private _getData: GetDataService) {}

  blur(elem) {
    document.getElementById(elem).blur()
  }
  barChartLabels:any[]
  barChartData:any[]
  doughnutChartLabels:string[]
  doughnutChartData:number[]


  ngOnInit() {
    this._getData.getData('http://localhost:3000/twitterSearch').subscribe(data => {
      console.log(data);
      this.barChartLabels = data.axisLabels
      this.barChartData = [{data: data.dataPoints, label:'Related Words'}]
      this.doughnutChartLabels = data.axisLabels
      this.doughnutChartData = data.dataPoints.map(elem => elem/data.total)
    })
  }

}
