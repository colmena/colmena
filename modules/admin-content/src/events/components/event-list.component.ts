import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { EventsService } from '../events.service'

@Component({
  selector: 'app-event-list',
  template: `
    <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
  `,
})
export class EventListComponent {
  @ViewChild('grid') private grid

  constructor(
    public service: EventsService,
    private uiService: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.service.getFiles()
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        return this.router.navigate([event.item.id], {
          relativeTo: this.route.parent,
        })
      case 'add':
        return this.router.navigate(['create'], {
          relativeTo: this.route.parent,
        })
      case 'delete':
        const successCb = () =>
          this.service.deleteItem(
            event.item,
            () => this.grid.refreshData(),
            err => this.uiService.toastError('Error Deleting item', err.message)
          )
        const question = {
          title: 'Are You Sure?',
          text: 'The action can not be undone.',
        }
        return this.uiService.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown Event Action', event)
    }
  }
}
