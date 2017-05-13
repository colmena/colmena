import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-data-grid-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss']
})
export class RowsComponent {

  @Input() public columns
  @Input() public columnSorting
  @Input() public items: any[]
  @Output() action = new EventEmitter()

  clickColumn($event, column) {
    $event.preventDefault()
    this.action.emit({ action: 'sort', payload: column.field })
  }

  clickItem($event, action, item) {
    $event.preventDefault()
    this.action.emit({ action, item })
  }
}
