import { Component, ViewChild } from '@angular/core'

import { EventsService } from './events.service'
import { UiService } from '@colmena/colmena-angular-ui'

@Component({
  selector: 'app-events',
  template: `
    <ui-modal #form title="Event Form">
      Item Form
      <pre>{{item | json}}</pre>
    </ui-modal>
    <ui-modal #view title="View Item">
      You are viewing the item!
      <pre>{{item | json}}</pre>
    </ui-modal>
    <template #iconTemplate let-item="item">
      <div class="card-block" style="min-height: 200px">
        <h6 style="text-decoration: underline; cursor: pointer;" (click)="action({ action: 'view', item: item })">
          <i class="icon-calendar"></i> {{item.name}}
        </h6>
        <div class="text-muted" *ngIf="item.date">Date: {{item.date | date: 'short' }}</div>
        <div class="text-muted" *ngIf="item.location">Location {{item.location}}</div>
      </div>
    </template>
    <ui-data-grid #grid (action)="action($event)" [iconTemplate]="iconTemplate" [service]="service">
    </ui-data-grid>
  `,
})
export class EventListComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view

  public item: any
  public events: any[]

  constructor(
    public service: EventsService,
    public uiService: UiService,
  ) {
  }

  action(event) {
    switch (event.action) {
      case 'form':
        this.item = event.item
        this.form.show()
        break
      case 'edit':
        this.item = event.item
        this.form.show()
        break
      case 'view':
        this.item = event.item
        this.view.show()
        break
      case 'delete':
        const successCb = () => this.service.eventApi.deleteById(event.item.id)
          .subscribe(() => this.grid.refreshData())

        this.uiService.alertQuestion({ title: 'Are you sure?', text: 'The action can not be undone.' }, successCb, () => ({}))

        break
      default:
        console.log('Unknown action', event)
        break
    }
  }

}
