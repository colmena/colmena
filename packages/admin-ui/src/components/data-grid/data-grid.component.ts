import { Component, Input, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core'

@Component({
  selector: 'ui-data-grid',
  templateUrl: './data-grid.component.html',
})
export class UiDataGridComponent implements OnInit {

  @Input() limit = 20

  @Input() config: any = {}

  @Input() service: any
  @Output() action = new EventEmitter()

  public items: any[]

  public totalItems
  public currentPage: any = 1

  public columns = []
  public columnSorting = {}

  public refreshData() {
    this.columns = this.service.columns
    this.columnSorting = this.service.columnSorting
    this.limit = this.service.limit

    this.service.getItems()
      .subscribe(res => this.items = res)

    this.service.getItemCount()
      .subscribe(res => this.totalItems = res.count)
  }

  ngOnInit() {
    this.service.limit = this.limit
    this.refreshData()

    if (!this.config.header) {
      this.config.header = {
        buttons: [
          { action: 'add', icon: 'icon-plus', classNames: 'btn btn-outline-success' },
        ]
      }
    }
  }

  searchAction(query) {
    this.service.search = query
    this.refreshData()
  }

  setOrder(event) {
    this.service.order = event
    this.refreshData()
  }

  setLimit(limit) {
    this.service.limit = limit
    this.refreshData()
  }

  setOffsetLimit($event) {
    this.service.offset = $event.offset
    this.service.limit = $event.limit
    this.refreshData()
  }

  gridAction(event) {
    switch (event.action) {
      case 'limit':
        return this.setLimit(event.payload)
      case 'sort':
        return this.setOrder(event.payload)
      case 'offset':
        return this.setOffsetLimit(event.payload)
      case 'search':
        return this.searchAction(event.payload)
      case 'refresh':
        return this.refreshData()
      default:
        return this.action.emit(event)
    }
  }

}
