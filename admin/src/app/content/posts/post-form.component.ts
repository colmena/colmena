import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-post-form',
  template: `
    <form>
      <!--<ui-form [config]="config" [item]="item"></ui-form>-->
      <div class="text-xs-center">
        <button type="button" (click)="save.emit(item)" class="btn btn-sm btn-outline-success">Save</button>
      </div>
    </form>
  `,
})
export class PostFormComponent {

  @Output() save = new EventEmitter()
  @Input() item
  @Input() config = {
    fields: [
      { name: 'title', label: 'Title', type: 'text', placeholder: 'Title' },
      { name: 'content', label: 'Content', type: 'text', placeholder: 'Content' },
    ],
  }
}
