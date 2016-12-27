import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-crud-list',
  templateUrl: './ui-crud-list.component.html'
})
export class UiCrudListComponent {
  @Input() service;
}
