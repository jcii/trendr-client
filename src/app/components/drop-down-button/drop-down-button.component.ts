import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

 
@Component({
  selector: 'dropdown-demo',
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  template:`  <span dropdown (onToggle)="toggled($event)">
    <a href id="simple-dropdown" dropdownToggle class="dropdown-toggle">
      Trends
    </a>
    <ul class="dropdown-menu" dropdownMenu aria-labelledby="simple-dropdown">
      <li *ngFor="let choice of items">
        <a class="dropdown-item" href="#">{{choice}}</a>
      </li>
    </ul>
  </span>`
})
export class DropdownDemoComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}