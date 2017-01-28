import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-crud-details',
  templateUrl: './ui-crud-details.component.html'
})
export class UiCrudDetailsComponent {
  @Input() service;
}
