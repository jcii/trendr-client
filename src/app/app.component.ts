import { Component, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

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
