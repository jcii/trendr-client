import { Component, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginRootComponent } from './components/login-root'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['app.component.css'],
  styles: [`
  body{
    background-color: green;
  }
  `],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

    public constructor( public viewContainerRef:ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;
    }
}