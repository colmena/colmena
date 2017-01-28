import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-data-grid-pager',
  templateUrl: './pager.component.html',
})
export class PagerComponent {

  @Input() currentPage
  @Input() itemsPerPage
  @Input() totalItems

  @Output() setOffsetLimit = new EventEmitter()

  pageChanged($event) {
    this.setOffsetLimit.emit({
      limit: $event.itemsPerPage,
      offset: ($event.itemsPerPage * $event.page) - $event.itemsPerPage
    })
  }
}
