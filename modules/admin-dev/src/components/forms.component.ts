import { Component, OnInit } from '@angular/core'
import { FormService, UiService } from '@colmena/admin-ui'

@Component({
  selector: 'app-dev-forms',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Form Item</div>
          <div class="card-block">
            <pre>{{item | json}}</pre>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FormsComponent implements OnInit {

  public item: any = {}
  public formConfig: any = {}

  constructor(
    private formService: FormService,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.formConfig = {
      showCancel: false,
      title: 'FormService form elements',
      icon: '',
      fields: [
        this.formService.input('name', {
          label: 'Name',
          placeholder: 'Name'
        }),
        this.formService.email('email', {
          label: 'Email',
          placeholder: 'Email'
        }),
        this.formService.password('password', {
          label: 'Password',
          placeholder: 'Password'
        }),
        this.formService.textarea('text', {
          label: 'Text',
          placeholder: 'Text'
        }),
        this.formService.date('date', {
          label: 'Date',
          placeholder: 'Date'
        }),
        this.formService.select('select', {
          label: 'Select',
          options: [
            { value: 'option-value-1', label: 'option-label-1' },
            { value: 'option-value-2', label: 'option-label-2' },
          ]
        }),
      ],
    }
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        this.uiService.toastSuccess('Save!', event.item)
        return
      default:
        console.log('Unknown event action', event)
        break
    }
  }
}
