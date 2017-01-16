import { Routes } from '@angular/router'

import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemSettingsRoutes } from './settings/settings.routes'
import { SystemUsersRoutes } from './users/users.routes'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AboutComponent } from './about/about.component'
import { NotFoundComponent } from '../auth/not-found/not-found.component'

export const SystemRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    ...SystemDomainsRoutes,
    ...SystemSettingsRoutes,
    ...SystemUsersRoutes,
  ],
} ]

