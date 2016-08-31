import { Component, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    public constructor( public viewContainerRef:ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;
    }

}
