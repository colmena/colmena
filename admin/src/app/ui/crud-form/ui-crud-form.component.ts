import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'ui-crud-form',
  templateUrl: './ui-crud-form.component.html'
})
export class UiCrudFormComponent {
  @Input() service
  @Output() submit = new EventEmitter()
}
