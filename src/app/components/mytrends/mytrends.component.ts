import { Component, OnInit } from '@angular/core'
import { ModalDemoComponent } from '../test-modal'

@Component({
  moduleId: module.id,
  selector: 'app-mytrends',
  templateUrl: 'mytrends.component.html',
  styleUrls: ['mytrends.component.css'],
  directives: [ModalDemoComponent]
})
export class MytrendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
