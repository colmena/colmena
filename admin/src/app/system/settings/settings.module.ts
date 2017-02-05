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
  moduleLink = {
    weight: 120, label: 'Settings', icon: 'icon-settings', link: [ '/', 'system', 'settings' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: this.moduleLink })
  }
}
