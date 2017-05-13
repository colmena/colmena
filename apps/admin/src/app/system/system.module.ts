import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppSharedModule } from '../app.shared.module'

import { SystemDashboardComponent } from './system.component'
import { DomainsComponent } from './domains/domains.component'
import { SettingsComponent } from './settings/settings.component'
import { UsersComponent } from './users/users.component'
import { DomainsService } from './domains/domains.service'
import { SettingsService } from './settings/settings.service'
import { UsersService } from './users/users.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    DomainsComponent,
    SettingsComponent,
    UsersComponent,
    SystemDashboardComponent,
  ],
  providers: [
    DomainsService,
    SettingsService,
    UsersService,
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

    this.dispatchLinks({ weight: 110, label: 'Domains', icon: 'icon-globe', link: [ '/', 'system', 'domains' ] })
    this.dispatchLinks({ weight: 120, label: 'Settings', icon: 'icon-settings', link: [ '/', 'system', 'settings' ] })
    this.dispatchLinks({ weight: 130, label: 'Users', icon: 'icon-people', link: [ '/', 'system', 'users' ] })

    this.dispatchIcons({ count: '∞', label: 'Domains', type: 'info', icon: 'icon-globe', link: [ '/', 'system', 'domains' ] })
    this.dispatchIcons({ count: '∞', label: 'Settings', type: 'success', icon: 'icon-settings', link: [ '/', 'system', 'settings' ] })
    this.dispatchIcons({ count: '∞', label: 'Users', type: 'warning', icon: 'icon-people', link: [ '/', 'system', 'users' ] })
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: links })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links })
  }

  dispatchIcons(links) {
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: links })
  }
}
