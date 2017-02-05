import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'ui-form',
  template: `
    <form class="formly" role="form" novalidate [formGroup]="form" (ngSubmit)="save.emit(item)">
      <formly-form [model]="item" [fields]="fields">
        <button type="submit" class="btn btn-default">Save</button>
        <button (click)="close.emit()" type="button" class="btn btn-default">Cancel</button>
      </formly-form>
    </form>
  `
})
export class UiFormComponent {
  @Input() fields
  @Input() item: any

  @Output() save = new EventEmitter()
  @Output() close = new EventEmitter()

  public form: FormGroup = new FormGroup({})

}
