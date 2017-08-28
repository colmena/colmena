import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { SettingsService } from '../settings.service'

@Component({
  selector: 'app-setting-list',
  template: `
    <div class="card">
      <div class="card-block">
        <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
      </div>
    </div>
  `,
})
export class SettingListComponent {

  @ViewChild('grid') private grid

  constructor(
    public service: SettingsService,
    private ui: UiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  action(event) {
    switch (event.action) {
      case 'edit':
      case 'view':
        return this.router.navigate([event.item['key']], { relativeTo: this.route.parent })
      case 'add':
        return this.router.navigate(['create'], { relativeTo: this.route.parent })
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item,
          () => this.grid.refreshData(),
          (err) => this.ui.alerts.toastError('Error deleting item', err.message))
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        return this.ui.alerts.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown event action', event)
    }
  }

}
