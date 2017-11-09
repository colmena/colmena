import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
})
export class UiTableComponent {
  @Input() config
  @Input() items
  @Output() action = new EventEmitter()
}
