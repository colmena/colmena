import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-form',
  templateUrl: './ui-form.component.html'
})
export class UiFormComponent {
  @Input() config;
  @Input() item;
}
