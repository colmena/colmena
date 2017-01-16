import { NgModule } from '@angular/core'

import { FcUiModule } from '../../lib/fc.ui/fc-ui.module'

import { DomainsModule } from './domains/domains.module'
import { SettingsModule } from './settings/settings.module'
import { UsersModule } from './users/users.module'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const components = [
  AboutComponent,
  DashboardComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    FcUiModule,
    DomainsModule,
    SettingsModule,
    UsersModule,
  ]
})
export class SystemModule { }
