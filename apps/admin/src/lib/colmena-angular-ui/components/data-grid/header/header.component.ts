import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core'

@Component({
  selector: 'ui-data-grid-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  @ViewChild('search') searchBox

  @Input() public config
  @Input() public columns
  @Input() public limit
  @Input() public view

  @Output() action = new EventEmitter()

  public limits = [
    8,
    20,
    40,
    80,
    100,
  ]

  public query: string = null

  add() {
    this.action.emit({ action: 'add' })
  }

  toggleView() {
    this.action.emit({ action: 'toggleView' })
  }

  refresh() {
    this.action.emit({ action: 'refresh' })
  }

  setLimit() {
    this.action.emit({ action: 'limit', payload: this.limit })
  }

  doSearch($event) {
    if ($event.code === 'Enter' || $event.type === 'click' || $event.type === 'blur') {
      if ($event.type !== 'blur') {
        this.searchBox.nativeElement.focus()
      }
      this.action.emit({ action: 'search', payload: this.query })
    }
  }
}
