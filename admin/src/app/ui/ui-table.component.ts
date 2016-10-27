import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html'
})
export class UiTableComponent {
  @Input() config;
  @Input() items;
}
