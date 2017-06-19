import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { ContentEvent, EventsService } from '../events.service'

@Component({
  selector: 'app-event-form',
  template: `
  <div class="row">
    <div class="col-md-6">
      <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
    </div>
    <div class="col-md-6">
      <app-content-event [item]="item"></app-content-event>
    </div>
  </div>
  `,
})
export class EventFormComponent implements OnInit {
  public formConfig: any = {}
  public item: any

  constructor(
    private service: EventsService,
    private uiService: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedEvent || new ContentEvent()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.uiService.toastSuccess(
              'Save Event Success',
              `<u>${event.item.name}</u> has been saved successfully`
            )
            this.handleAction({ action: 'cancel' })
          },
          err => this.uiService.toastError('Save Event Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/content/events'])
      default:
        return console.log('Unknown Event Action:', event)
    }
  }
}
