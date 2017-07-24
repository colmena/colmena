import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-builder',
  template: `
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <app-builder-palette [definition]="definition"></app-builder-palette>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <app-builder-form [definition]="definition" (action)="action.emit($event)"></app-builder-form>
        </div>
        <div class="card mt-3">
          <button class="btn btn-block btn-outline-secondary" (click)="showDefinition = !showDefinition">Show Definition
          </button>
          <div class="collapse" [class.show]="showDefinition">
            <pre>{{definition | json}}</pre>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BuilderComponent {

  showDefinition = false

  @Input() definition = []
  @Output() action = new EventEmitter()

}
