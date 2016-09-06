import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { BarChartComponent } from '../../bar-chart'

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['bootstrap.min.css', 'carousel.component.css'],
  directives: [BarChartComponent]
})
export class CarouselComponent {


}
