import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SystemDashboardComponent } from './system.component'

import { HasSystemAccess } from './system.guards'

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'System',
    },
    canActivate: [HasSystemAccess],
    children: [
      { path: '', component: SystemDashboardComponent, data: { title: 'Dashboard' } },
      { path: 'domains', loadChildren: './domains/domains.module#SystemDomainsModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SystemSettingsModule' },
      { path: 'users', loadChildren: './users/users.module#SystemUsersModule' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
