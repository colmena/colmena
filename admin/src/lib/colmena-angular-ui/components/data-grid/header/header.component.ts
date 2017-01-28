import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core'

@Component({
  selector: 'ui-data-grid-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  @Input() public columns
  @Input() public limit
  @Input() public view
  @Input() public selectedItems

  @Output() toggleView = new EventEmitter()
  @Output() searchAction = new EventEmitter()
  @Output() selectedAction = new EventEmitter()
  @Output() selectColumn = new EventEmitter()
  @Output() setLimit = new EventEmitter()

  @ViewChild('search') searchBox

  public query: string = null

  doSearch($event) {
    if ($event.code === 'Enter' || $event.type === 'click' || $event.type === 'blur') {
      if ($event.type !== 'blur') {
        this.searchBox.nativeElement.focus()
      }
      this.searchAction.emit(this.query)
    }
  }
}
