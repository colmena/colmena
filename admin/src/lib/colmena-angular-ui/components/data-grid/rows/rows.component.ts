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

  @Output() selectColumn = new EventEmitter()
  @Output() selectItem = new EventEmitter()

  clickColumn($event, column) {
    $event.preventDefault()
    this.selectColumn.emit(column.field)
  }

  clickItem($event, item) {
    $event.preventDefault()
    this.selectItem.emit({
      action: 'select',
      item,
    })
  }

  dblclickItem($event, item) {
    $event.preventDefault()
    this.selectItem.emit({
      action: 'activate',
      item,
    })
  }
}
