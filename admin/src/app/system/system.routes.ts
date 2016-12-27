
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SystemDomainsRoutes } from './domains/domains.routes'
import { SystemSettingsRoutes } from './settings/settings.routes'
import { SystemUsersRoutes } from './users/users.routes'

@NgModule({
  imports: [
    RouterModule.forChild([
      ...SystemDomainsRoutes,
      ...SystemSettingsRoutes,
      ...SystemUsersRoutes,
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class SystemRoutesModule {

}
