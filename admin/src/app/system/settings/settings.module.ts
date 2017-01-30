import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../../app.shared.module'

import { SettingFormComponent } from './setting-form.component'
import { SettingListComponent } from './setting-list.component'

import { SettingsService } from './settings.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    SettingFormComponent,
    SettingListComponent,
  ],
  providers: [
    SettingsService,
  ],
})
export class SettingsModule {
  constructor(private store: Store<any>) {
    this.store.dispatch({
      type: 'LAYOUT_HEADER_NAV', payload: {
        weight: 20, label: 'Settings', icon: 'icon-settings', link: [ '/', 'system', 'settings' ]
      }
    })
  }
}
