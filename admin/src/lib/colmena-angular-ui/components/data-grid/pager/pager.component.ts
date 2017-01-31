import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-data-grid-pager',
  templateUrl: './pager.component.html',
})
export class PagerComponent {

  @Input() public currentPage
  @Input() public itemsPerPage
  @Input() public totalItems

  @Output() action = new EventEmitter()

  pageChanged($event) {
    this.action.emit({
      type: 'offset',
      payload: {
        limit: $event.itemsPerPage,
        offset: ($event.itemsPerPage * $event.page) - $event.itemsPerPage,
      },
    })
  }
}
