import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-event-form',
  template: `
    <form>
      <!--<ui-form [config]="config" [item]="item"></ui-form>-->
      <div class="text-xs-center">
        <button type="button" (click)="save.emit(item)" class="btn btn-sm btn-outline-success">Save</button>
      </div>
    </form>
  `,
})
export class EventFormComponent {

  @Output() save = new EventEmitter()
  @Input() item
  @Input() config = {
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
      { name: 'location', label: 'Location', type: 'text', placeholder: 'Location' },
    ],
  }
}
