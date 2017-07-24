import { Component, Input } from '@angular/core';
import { BuilderService } from '../builder.service'

@Component({
  selector: 'app-builder-palette',
  template: `
    <div class="builder">
      <div class="builder-source">
        <ngx-dnd-container
          class="root-container"
          [model]="service.fieldTypes()"
          [dropZones]="['builder-target']"
          [copy]="true"
          (drag)="builderDrag($event)">
          <ng-template let-item="model">
            <i class="{{service.fieldTypeIcon(item.type)}}"></i>
            {{item.name}}
          </ng-template>
        </ngx-dnd-container>
      </div>
    </div>
  `,
})
export class BuilderPaletteComponent {

  counter = {}
  @Input() definition = []

  constructor(public service: BuilderService) {}

  builderDrag(e: any) {
    const item = e.value
    const count = this.getCount(item.type)
    item.key = `${item.type}_${count}`
  }


  getCount(type) {
    let counter = 0
    this.definition.forEach(field => {
      if (type === field.type) {
        counter++
      }
    })
    return counter
  }

}
