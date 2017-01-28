import { Component, Input, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core'

@Component({
  selector: 'ui-data-grid',
  templateUrl: './data-grid.component.html',
})
export class UiDataGridComponent implements OnInit {

  @Input() view: string = 'icons'
  @Input() limit: number = 20

  @Input() iconTemplate: TemplateRef<any>

  @Input() service: any
  @Output() itemsSelected = new EventEmitter()
  @Output() itemSelected = new EventEmitter()

  public items: any[]

  public totalItems
  public currentPage: any = {}

  public selectedItems: any[] = []
  public columns = []
  public columnSorting = {}

  public refreshData() {
    this.columns = this.service.columns
    this.columnSorting = this.service.columnSorting
    this.limit = this.service.limit

    this.service.getItems()
      .subscribe(res => this.items = res)

    this.service.getTotalItems()
      .subscribe(res => this.totalItems = res.count)
  }

  ngOnInit() {
    this.setLimit(this.limit)
    this.refreshData()
  }

  searchAction(query) {
    this.service.search = query
    this.refreshData()
  }

  selectColumn(event) {
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

  selectItem(event) {
    let idx = null

    this.selectedItems.forEach(selectedItem => {
      if (selectedItem === event.item) {
        idx = this.selectedItems.indexOf(event.item)
      }
    })

    if (idx === null) {
      this.selectedItems.push(event.item)
    } else {
      this.selectedItems.splice(idx, 1)
    }
    this.itemSelected.emit(event)
  }

  selectedAction(event) {
    this.itemsSelected.emit(event)
  }

  toggleView() {
    switch (this.view) {
      case 'icons':
        this.view = 'rows'
        break
      case 'rows':
        this.view = 'icons'
        break
    }
  }
}
