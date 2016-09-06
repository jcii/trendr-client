import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { BarChartComponent } from '../../bar-chart'
import { HichartComponent } from '../hichart'

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['bootstrap.min.css', 'carousel.component.css'],
  directives: [BarChartComponent, HichartComponent]
})
export class CarouselComponent {

blur(elem) {
  document.getElementById(elem).blur()
}

}
