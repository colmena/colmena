import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-item-view-buttons',
  templateUrl: './item-buttons.component.html',
  styleUrls: ['./item-buttons.component.scss'],
})
export class ItemButtonsComponent {
  @Input() item
  @Output() action = new EventEmitter()

  doClick(action) {
    this.action.emit({
      action,
      item: this.item,
    })
  }
}
