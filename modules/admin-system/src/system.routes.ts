import { Routes } from '@angular/router'

import { SystemDashboardComponent } from './system.component'
import { DomainsComponent } from './domains/domains.component'
import { SettingsComponent } from './settings/settings.component'
import { UsersComponent } from './users/users.component'

export const SystemModuleRoutes: Routes = [ {
  path: 'system',
  data: {
    title: 'System',
  },
  children: [
    { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'domains', component: DomainsComponent, data: { title: 'Domain' } },
    { path: 'settings', component: SettingsComponent, data: { title: 'Setting' } },
    { path: 'users', component: UsersComponent, data: { title: 'User' } },
  ],
} ]

