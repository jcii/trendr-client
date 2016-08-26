// import { Component, OnInit } from '@angular/core';

// // @Component({
// //   moduleId: module.id,
// //   selector: 'app-test-modal',
// //   templateUrl: 'test-modal.component.html',
// //   styleUrls: ['test-modal.component.css']
// // })


// import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

// @Component({
//   selector: 'modal-demo',
//   directives: [MODAL_DIRECTIVES],
//   viewProviders:[BS_VIEW_PROVIDERS],
//   templateUrl: 'test-modal.component.html'
// })


// export class TestModalComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component, ViewChild} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
 
// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

 
@Component({
  selector: 'modal-demo',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  // templateUrl: 'test-modal.component.html'
  template: `<button type="button" class="btn btn-primary" (click)="smModal.show()">Small modal testing</button>
 
<div bsModal #smModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="smModal.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Small modal</h4>
      </div>
      <div class="modal-body">
        what up
      </div>
    </div>
  </div>
</div>`
})
export class ModalDemoComponent {

    @ViewChild('childModal') public childModal: ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
 

}