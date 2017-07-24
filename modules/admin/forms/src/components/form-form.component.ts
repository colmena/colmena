import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { Form, FormsService } from '../forms.service'

@Component({
  selector: 'app-form-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6">
        <pre>{{item |json}}</pre>
      </div>
    </div>
  `,
})
export class FormFormComponent implements OnInit {
  public formConfig: any = {}
  public item: any

  constructor(
    private service: FormsService,
    private uiService: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedForm || new Form()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service
          .upsertItem(
            event.item,
            () => {
              this.uiService.toastSuccess(
                'Save Form Success',
                `<u>${event.item.name}</u> has been saved successfully`
              )
            },
            err => this.uiService.toastError('Save Form Fail', err.message)
          )
          .add(() => this.handleAction({ action: 'cancel' }))
      case 'cancel':
        return this.router.navigate(['/forms'])
      default:
        return console.log('Unknown event action:', event)
    }
  }
}
