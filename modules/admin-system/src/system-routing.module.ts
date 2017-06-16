import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SystemDashboardComponent } from './system.component'
import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemSettingsRoutes } from './settings/settings.routes'
import { SystemUsersRoutes } from './users/users.routes'

import { HasSystemAccess } from './system.guards'

export const routes: Routes = [ {
  path: 'system',
  data: {
    title: 'System',
  },
  canActivate: [HasSystemAccess],
  children: [
    { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
    ...SystemDomainsRoutes,
    ...SystemSettingsRoutes,
    ...SystemUsersRoutes,
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
