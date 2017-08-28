import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { Domain, DomainsService } from '../domains.service'

@Component({
  selector: 'app-domain-form',
  template: `
    <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class DomainFormComponent implements OnInit {

  public formConfig: any = {}
  public item: any

  constructor(
    private service: DomainsService,
    private ui: UiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedDomain || new Domain()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.ui.alerts.toastSuccess('Save Domain Success', `<u>${event.item.name}</u> has been saved successfully`)
            this.handleAction({ action: 'cancel' })
          },
          err => this.ui.alerts.toastError('Save Domain Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/system/domains'])
      default:
        return console.log('Unknown event action:', event)
    }
  }

}
