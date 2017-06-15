import { Routes } from '@angular/router'

import { SystemDashboardComponent } from './system.component'
import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemSettingsRoutes } from './settings/settings.routes'
import { SystemUsersRoutes } from './users/users.routes'

export const SystemModuleRoutes: Routes = [{
  path: '',
  data: {
    title: 'System',
  },
  children: [
    { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
    ...SystemDomainsRoutes,
    ...SystemSettingsRoutes,
    ...SystemUsersRoutes,
  ]
}]
