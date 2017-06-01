import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap'

@Component({
  selector: 'ui-modal',
  template: `
    <div bsModal #modal="bs-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="{{modalClass}}">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" aria-label="Close" (click)="hide()">
              <span aria-hidden="true">&times;</span>
            </button>
            <h6 class="modal-title">{{title}}</h6>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
`
})
export class UiModalComponent implements OnInit {

  public modalClass = 'modal-dialog'

  @Input() size
  @Input() title

  @ViewChild('modal') public modal: ModalDirective

  ngOnInit() {
    switch (this.size) {
      case 'small':
        this.modalClass = `${this.modalClass} modal-sm`
        break
      case 'large':
        this.modalClass = `${this.modalClass} modal-lg`
        break
    }
  }

  public show(): void {
    this.modal.show()
  }

  public hide(): void {
    this.modal.hide()
  }

}
