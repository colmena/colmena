import { Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BuilderService } from '../builder.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-form-builder',
  template: `
    <div class="row">
      <div class="col-md-9">
        <app-builder [definition]="definition" (action)="action($event)"></app-builder>
      </div>
      <div class="col-md-3">
        <app-preview [fields]="fields"></app-preview>
      </div>
    </div>
  `,
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @Input() definition = []
  @Input() control = new EventEmitter()
  fields: any[] = []

  constructor(
    private service: BuilderService,
  ) {}

  ngOnInit() {
    this.update(this.definition)

    this.control.subscribe(cmd => this.action(cmd))
  }

  update(definition) {
    this.fields = this.service.parseDefinition(definition)
  }

  action($event) {
    switch ($event.type) {
      case 'update':
        return this.update($event.payload)
      default:
        console.log('Unknown action', $event)
    }
  }

}
