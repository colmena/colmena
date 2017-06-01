import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap'

@Component({
  selector: 'ui-modal-form',
  template: `
    <div bsModal #modal="bs-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="{{modalClass}}">
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 0;
    }
  `]
})
export class UiModalFormComponent implements OnInit {

  public modalClass = 'modal-dialog'

  @Input() form = true
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
