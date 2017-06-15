import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SystemDomainsModule } from './domains/domains.module'
import { SystemSettingsModule } from './settings/settings.module'
import { SystemUsersModule } from './users/users.module'

import { SystemDashboardComponent } from './system.component'
import { SystemInfoComponent } from './system-info.component'
import { SystemModulesComponent } from './system-modules.component'

import { SystemUserResolver } from './users/users.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ColmenaUiModule,
    SystemDomainsModule,
    SystemSettingsModule,
    SystemUsersModule,
    RouterModule,
  ],
  declarations: [
    SystemDashboardComponent,
    SystemInfoComponent,
    SystemModulesComponent,
  ],
  providers: [
    SystemUserResolver,
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

    this.dispatchLinks({ weight: 110, label: 'Domains', icon: 'icon-globe', link: ['/', 'system', 'domains'] })
    this.dispatchLinks({ weight: 120, label: 'Settings', icon: 'icon-settings', link: ['/', 'system', 'settings'] })
    this.dispatchLinks({ weight: 130, label: 'Users', icon: 'icon-people', link: ['/', 'system', 'users'] })

    this.dispatchIcons({ count: '∞', label: 'Domains', type: 'info', icon: 'icon-globe', link: ['/', 'system', 'domains'] })
    this.dispatchIcons({ count: '∞', label: 'Settings', type: 'success', icon: 'icon-settings', link: ['/', 'system', 'settings'] })
    this.dispatchIcons({ count: '∞', label: 'Users', type: 'warning', icon: 'icon-people', link: ['/', 'system', 'users'] })
  }

  dispatchLinks(links) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: links })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: links })
  }

  dispatchIcons(links) {
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: links })
  }
}
