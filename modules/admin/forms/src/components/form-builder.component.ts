import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { Form, FormsService } from '../forms.service'

@Component({
  selector: 'app-form-builder-wrapper',
  template: `
    <app-form-builder [definition]="item.definition"></app-form-builder>
  `,
})
export class FormBuilderComponent implements OnInit {

  public item: any

  constructor(
    private service: FormsService,
    private uiService: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedForm || new Form()
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
