import { Routes } from '@angular/router'

import { SystemDashboardComponent } from './system.component'
import { SettingsComponent } from './settings/settings.component'

import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemUsersRoutes } from './users/users.routes'

export const SystemModuleRoutes: Routes = [{
  path: 'system',
  data: {
    title: 'System',
  },
  children: [
    { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
    ...SystemDomainsRoutes,
    ...SystemUsersRoutes
  ]
}]
