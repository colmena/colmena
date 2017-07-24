import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-preview',
  template: `
    <div class="card">
      <div class="card-block">
        <form class="formly" role="form" novalidate [formGroup]="form"
              (ngSubmit)="action.emit({ type: submit, payload: item})">
          <formly-form [model]="item" [fields]="fields">
            <button type="submit" class="btn btn-outline-success">Submit</button>
          </formly-form>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class PreviewComponent {

  form: FormGroup = new FormGroup({});

  @Input() item = {};
  @Input() fields = []

  @Output() action = new EventEmitter()

  submit(item) {
    console.log(item);
  }

}
