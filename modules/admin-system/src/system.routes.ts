import { Routes } from '@angular/router'

import { SystemDashboardComponent } from './system.component'
import { DomainsComponent } from './domains/domains.component'
import { SettingsComponent } from './settings/settings.component'

import { SystemUsersRoutes } from './users/users.routes'

export const SystemModuleRoutes: Routes = [ {
  path: 'system',
  data: {
    title: 'System',
  },
  children: [
    { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'domains', component: DomainsComponent, data: { title: 'Domains' } },
    { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
    ...SystemUsersRoutes
  ]
} ]
