import { Routes } from '@angular/router'

import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemSettingsRoutes } from './settings/settings.routes'
import { SystemUsersRoutes } from './users/users.routes'

export const SystemModuleRoutes: Routes = [ {
  path: 'system',
  data: {
    title: 'System',
  },
  children: [
    ...SystemDomainsRoutes,
    ...SystemSettingsRoutes,
    ...SystemUsersRoutes,
  ],
} ]

