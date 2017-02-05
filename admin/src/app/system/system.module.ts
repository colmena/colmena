import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../app.shared.module'
import { DomainsModule } from './domains/domains.module'
import { SettingsModule } from './settings/settings.module'
import { UsersModule } from './users/users.module'

import { SystemDashboardComponent } from './system.component'

@NgModule({
  imports: [
    AppSharedModule,
    DomainsModule,
    SettingsModule,
    UsersModule,
  ],
  declarations: [
    SystemDashboardComponent,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule {

  constructor(
    private store: Store<any>,
  ) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: { weight: 100, type: 'title', label: 'System' } })
  }

}
