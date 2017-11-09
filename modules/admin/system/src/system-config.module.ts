import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'system'

const link = (...links) => ['/', moduleName, ...links]

const moduleConfig = {
  name: 'System',
  icon: 'icon-settings',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 110, label: 'Domains', icon: 'icon-globe', link: link('domains') },
    { weight: 120, label: 'Settings', icon: 'icon-settings', link: link('settings') },
    { weight: 130, label: 'Users', icon: 'icon-people', link: link('users') },
  ],
  sidebarLinks: [
    { weight: 100, type: 'title', label: 'System' },
    { weight: 110, label: 'Domains', icon: 'icon-globe', link: link('domains') },
    { weight: 120, label: 'Settings', icon: 'icon-settings', link: link('settings') },
    { weight: 130, label: 'Users', icon: 'icon-people', link: link('users') },
  ],
  dashboardLinks: {
    system: [
      { count: '∞', label: 'Domains', type: 'info', icon: 'icon-globe', link: link('domains') },
      { count: '∞', label: 'Settings', type: 'success', icon: 'icon-settings', link: link('settings') },
      { count: '∞', label: 'Users', type: 'warning', icon: 'icon-people', link: link('users') },
    ],
  },
}
@NgModule()
export class SystemConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}
