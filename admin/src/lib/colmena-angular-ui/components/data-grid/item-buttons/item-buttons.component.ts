import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-item-view-buttons',
  templateUrl: './item-buttons.component.html',
  styleUrls: ['./item-buttons.component.scss']
})
export class ItemButtonsComponent {

  @Input() item
  @Output() buttonClick = new EventEmitter()


  doClick($event, action) {
    $event.preventDefault()

    this.buttonClick.emit({
      action,
      item: this.item,
    })
  }

}
