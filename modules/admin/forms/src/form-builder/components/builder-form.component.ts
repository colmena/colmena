import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuilderService } from '../builder.service'

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styles: [`
    table {
      margin-bottom: 0;
    }
    .card-block-details {
      padding: 5px;
    }
  `]
})
export class BuilderFormComponent {

  @Input() definition = []
  @Output() action = new EventEmitter()

  constructor(public service: BuilderService) {}

  update() {
    this.action.emit({ type: 'update', payload: this.definition })
  }

}
