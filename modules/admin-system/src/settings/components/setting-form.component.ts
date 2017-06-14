import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { Setting, SettingsService } from '../settings.service'

@Component({
  selector: 'app-setting-form',
  template: `
    <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class SettingFormComponent implements OnInit {

  public formConfig: any = {}
  public item: any

  constructor(
    private service: SettingsService,
    private uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedSetting || new Setting()
    this.formConfig = this.service.getFormConfig(this.item && this.item.system)
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.uiService.toastSuccess('Save Setting Success', `<u>${event.item.key}</u> has been saved successfully`)
          },
          err => this.uiService.toastError('Save Setting Fail', err.message)
        ).add(() => this.router.navigate(['/system/settings']))
      case 'cancel':
        return this.router.navigate(['/system/settings'])
      default:
        return console.log('Unknown event action:', event)
    }
  }

}
