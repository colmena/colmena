import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { ContentPage, PagesService } from '../pages.service'

@Component({
  selector: 'app-page-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6">
        <app-content-page [item]="item"></app-content-page>
      </div>
    </div>
  `,
})
export class PageFormComponent implements OnInit {
  public formConfig: any = {}
  public item: any

  constructor(
    private service: PagesService,
    private ui: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedPage || new ContentPage()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.router.navigate(['/content/pages'])
            this.ui.alerts.toastSuccess(
              'Save Page Success',
              `<u>${event.item.name}</u> has been saved successfully`
            )
          },
          err => this.ui.alerts.toastError('Save Page Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/content/pages'])
      default:
        return console.log('Unknown event action:', event)
    }
  }
}
