import { NgModule } from '@angular/core'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

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
    ColmenaUiModule,
    DomainsModule,
    SettingsModule,
    UsersModule,
  ]
})
export class SystemModule { }
